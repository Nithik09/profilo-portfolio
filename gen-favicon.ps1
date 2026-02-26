param(
    [string]$Source = 'public/roshan_no_bg.png',
    [string]$BaseName = 'roshan_no_bg'
)

Add-Type -AssemblyName System.Drawing

$src = Join-Path $PSScriptRoot $Source
if (-not (Test-Path $src)) {
    Write-Error "Source not found: $src"
    exit 1
}

$outDir = Join-Path $PSScriptRoot 'public'
$out32 = Join-Path $outDir "$BaseName-32.png"
$out512 = Join-Path $outDir "$BaseName-512.png"
$outTouch = Join-Path $outDir "$BaseName.png"

$img = [System.Drawing.Image]::FromFile($src)

function Save-Resized {
    param(
        [Parameter(Mandatory)][System.Drawing.Image]$Image,
        [Parameter(Mandatory)][int]$Width,
        [Parameter(Mandatory)][int]$Height,
        [Parameter(Mandatory)][string]$Path
    )
    $bmp = New-Object System.Drawing.Bitmap $Width, $Height
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($Image, 0, 0, $Width, $Height)
    $g.Dispose()
    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

Save-Resized -Image $img -Width 32 -Height 32 -Path $out32
Save-Resized -Image $img -Width 512 -Height 512 -Path $out512
$img.Dispose()
Copy-Item $out512 $outTouch -Force
