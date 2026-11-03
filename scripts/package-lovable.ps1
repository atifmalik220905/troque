# PowerShell script to package clean Lovable import ZIP
$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path "$PSScriptRoot\.."
$zipPath = Join-Path $repoRoot "torque-lovable-ready.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Write-Host "Creating clean ZIP package for Lovable (< 250MB limit)..."

$includeDirs = @("src", "public", "scripts")
$includeFiles = @(
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "next.config.ts",
    "next-env.d.ts",
    "eslint.config.mjs",
    "lovable.json",
    "LOVABLE.md",
    "README.md",
    ".gitignore"
)

$tempDir = Join-Path ([System.IO.Path]::GetTempPath()) ("torque-lovable-" + [System.Guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
    foreach ($dir in $includeDirs) {
        $source = Join-Path $repoRoot $dir
        if (Test-Path $source) {
            Copy-Item -Path $source -Destination (Join-Path $tempDir $dir) -Recurse -Force
        }
    }

    foreach ($file in $includeFiles) {
        $source = Join-Path $repoRoot $file
        if (Test-Path $source) {
            Copy-Item -Path $source -Destination (Join-Path $tempDir $file) -Force
        }
    }

    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::CreateFromDirectory($tempDir, $zipPath, [System.IO.Compression.CompressionLevel]::Optimal, $false)

    $zipSizeMb = [math]::Round(((Get-Item $zipPath).Length / 1MB), 2)
    Write-Host "Successfully generated $zipPath ($zipSizeMb MB) - Ready for Lovable.dev import!"
}
finally {
    if (Test-Path $tempDir) {
        Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}

