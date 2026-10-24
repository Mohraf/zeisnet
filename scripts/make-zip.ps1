# Builds zeisnet-kenya-site.zip from out/ with forward-slash entry names,
# so Linux/cPanel extractors create proper directories.
# (PowerShell's Compress-Archive writes backslash entry names, which
# break extraction on Linux — do not use it for this.)
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression.FileSystem

$root = Split-Path $PSScriptRoot -Parent
$outDir = Join-Path $root "out"
$zipPath = Join-Path $root "zeisnet-kenya-site.zip"

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

$archive = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')
try {
  Get-ChildItem $outDir -Recurse -File -Force | ForEach-Object {
    $rel = $_.FullName.Substring($outDir.Length + 1).Replace('\', '/')
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
      $archive, $_.FullName, $rel, [System.IO.Compression.CompressionLevel]::Optimal)
  }
} finally {
  $archive.Dispose()
}

Write-Output "Created $zipPath"
