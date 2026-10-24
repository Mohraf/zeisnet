const WHATSAPP_URL =
  "https://wa.me/254722536771?text=" +
  encodeURIComponent("Hello Zeisnet! I'd like to ask about your services.");

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.4.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35z" />
      <path d="M12.05 2a9.94 9.94 0 0 0-8.6 14.9L2 22l5.25-1.38A9.94 9.94 0 1 0 12.05 2zm0 18.2c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 1 1 7.04 3.87z" />
    </svg>
  );
}

export function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zeisnet on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
    >
      <span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/50"
        aria-hidden
      />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#25D366]/50 group-active:scale-95">
        <WhatsappIcon className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-night-950 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
