Add-Type -AssemblyName System.Drawing
$src = Join-Path $PSScriptRoot 'public/roshan.jpeg'
if (-not (Test-Path $src)) {
    Write-Error "Source not found: $src"
    exit 1
}
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
Save-Resized -Image $img -Width 32 -Height 32 -Path (Join-Path $PSScriptRoot 'public/roshan-32.png')
Save-Resized -Image $img -Width 512 -Height 512 -Path (Join-Path $PSScriptRoot 'public/roshan-512.png')
$img.Dispose()
Copy-Item (Join-Path $PSScriptRoot 'public/roshan-512.png') (Join-Path $PSScriptRoot 'public/roshan.png') -Force
