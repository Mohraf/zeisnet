<?php
/**
 * Zeisnet contact-form mailer.
 *
 * Runs on cPanel/Apache alongside the static Next.js export (it lives in
 * public/ so it is copied to out/ and uploaded to public_html). The static
 * front-end POSTs the form here and this script emails support@zeisnet.co.ke
 * using the server's local mail transport — no Node server or third-party
 * API required.
 */

// ---- Configuration ------------------------------------------------------
$RECIPIENT = 'support@zeisnet.co.ke';
// From address should belong to this domain so it aligns with SPF/DKIM and
// is not flagged as spam. Create this address in cPanel (or use an existing
// one). It is NOT where replies go — that is the visitor (see Reply-To).
$FROM = 'noreply@zeisnet.co.ke';
$FROM_NAME = 'Zeisnet Kenya Website';

// Timestamp emails in Kenyan time (EAT), not the host's server timezone.
date_default_timezone_set('Africa/Nairobi');

// ---- Only accept POST ---------------------------------------------------
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// ---- Read + trim input --------------------------------------------------
function field($key) {
    return isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
}

$firstName = field('firstName');
$lastName  = field('lastName');
$email     = field('email');
$phone     = field('phone');
$topic     = field('topic');
$message   = field('message');
$honeypot  = field('company'); // hidden anti-spam field; real users leave blank

// ---- Spam trap: silently "succeed" for bots -----------------------------
if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// ---- Validation ---------------------------------------------------------
$errors = [];
if ($firstName === '') $errors[] = 'First name is required.';
if ($lastName === '')  $errors[] = 'Last name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}
if ($topic === '')   $errors[] = 'Please choose a topic.';
if ($message === '') $errors[] = 'Message is required.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ---- Guard against header injection -------------------------------------
// Strip any CR/LF from values that end up in mail headers.
function noNewlines($value) {
    return str_replace(["\r", "\n", "%0a", "%0d"], '', $value);
}
$safeEmail = noNewlines($email);
$fullName  = noNewlines($firstName . ' ' . $lastName);

// ---- Build the email ----------------------------------------------------
$subject = "New enquiry: {$topic} — {$fullName}";

$bodyLines = [
    "New contact-form submission from zeisnet.co.ke",
    str_repeat('-', 44),
    "Name:    {$firstName} {$lastName}",
    "Email:   {$email}",
    "Phone:   " . ($phone !== '' ? $phone : '(not provided)'),
    "Topic:   {$topic}",
    "",
    "Message:",
    $message,
    "",
    str_repeat('-', 44),
    "Sent " . date('D, d M Y H:i:s') . " (EAT)",
];
$body = implode("\n", $bodyLines);

$headers   = [];
$headers[] = 'From: ' . $FROM_NAME . ' <' . $FROM . '>';
$headers[] = 'Reply-To: ' . $fullName . ' <' . $safeEmail . '>';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=utf-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// -f sets the envelope sender, improving deliverability on cPanel.
$sent = @mail(
    $RECIPIENT,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers),
    '-f ' . $FROM
);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'The message could not be sent right now. Please email support@zeisnet.co.ke directly.',
    ]);
}
