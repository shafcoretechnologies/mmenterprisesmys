param(
  [string]$InputPath = "assets/logo.png",
  [string]$OutDir = "assets"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Get-AlphaBounds {
  param([System.Drawing.Bitmap]$Bitmap)

  $w = $Bitmap.Width
  $h = $Bitmap.Height
  $minX = $w
  $minY = $h
  $maxX = -1
  $maxY = -1

  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $a = $Bitmap.GetPixel($x, $y).A
      if ($a -gt 10) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  if ($maxX -lt 0 -or $maxY -lt 0) {
    return [System.Drawing.Rectangle]::new(0, 0, $w, $h)
  }

  return [System.Drawing.Rectangle]::new($minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1))
}

function New-RoundedRectPath {
  param(
    [System.Drawing.RectangleF]$Rect,
    [float]$Radius
  )

  $diam = $Radius * 2.0
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()

  if ($Radius -le 0.0) {
    $path.AddRectangle($Rect)
    $path.CloseFigure()
    return $path
  }

  $path.AddArc($Rect.X, $Rect.Y, $diam, $diam, 180, 90)
  $path.AddArc($Rect.Right - $diam, $Rect.Y, $diam, $diam, 270, 90)
  $path.AddArc($Rect.Right - $diam, $Rect.Bottom - $diam, $diam, $diam, 0, 90)
  $path.AddArc($Rect.X, $Rect.Bottom - $diam, $diam, $diam, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-FaviconBitmap {
  param(
    [int]$Size,
    [System.Drawing.Bitmap]$Source,
    [System.Drawing.Rectangle]$CropRect
  )

  $bg = [System.Drawing.ColorTranslator]::FromHtml("#0d1b3e")    # site navy
  $bg2 = [System.Drawing.ColorTranslator]::FromHtml("#162850")   # deeper navy
  $gold = [System.Drawing.ColorTranslator]::FromHtml("#c9973a")  # site gold

  $bmp = [System.Drawing.Bitmap]::new($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  try {
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.Clear($bg)

    # "Highlighted" plate: a slightly lighter rounded square + gold border
    $pad = [Math]::Max(2, [int]([Math]::Round($Size * 0.08)))
    $rect = [System.Drawing.RectangleF]::new($pad, $pad, $Size - 2*$pad, $Size - 2*$pad)
    $radius = [Math]::Max(2.0, [single]([Math]::Round($Size * 0.22)))
    $path = New-RoundedRectPath -Rect $rect -Radius $radius
    try {
      $fill = [System.Drawing.SolidBrush]::new($bg2)
      try { $g.FillPath($fill, $path) } finally { $fill.Dispose() }

      $borderW = [Math]::Max(2, [int]([Math]::Round($Size * 0.06)))
      $pen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(235, $gold), $borderW)
      $pen.Alignment = [System.Drawing.Drawing2D.PenAlignment]::Inset
      try { $g.DrawPath($pen, $path) } finally { $pen.Dispose() }

      $glowPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(70, $gold), [Math]::Max(1, [int]([Math]::Round($Size * 0.02))))
      $glowPen.Alignment = [System.Drawing.Drawing2D.PenAlignment]::Inset
      try { $g.DrawPath($glowPen, $path) } finally { $glowPen.Dispose() }
    } finally {
      $path.Dispose()
    }

    # Draw the logo (trimmed), centered, never cropped.
    $avail = $Size - 2*[Math]::Max(4, [int]([Math]::Round($Size * 0.18)))
    $sw = [double]$CropRect.Width
    $sh = [double]$CropRect.Height
    $scale = [Math]::Min($avail / $sw, $avail / $sh)
    $scale = $scale * 0.98

    $dw = [int]([Math]::Max(1, [Math]::Round($sw * $scale)))
    $dh = [int]([Math]::Max(1, [Math]::Round($sh * $scale)))
    $dx = [int]([Math]::Floor(($Size - $dw) / 2))
    $dy = [int]([Math]::Floor(($Size - $dh) / 2))

    $destRect = [System.Drawing.Rectangle]::new($dx, $dy, $dw, $dh)
    $g.DrawImage($Source, $destRect, $CropRect, [System.Drawing.GraphicsUnit]::Pixel)
  } finally {
    $g.Dispose()
  }

  return $bmp
}

function Write-IcoFromPngs {
  param(
    [string[]]$PngPaths,
    [string]$OutPath
  )

  # ICO container with embedded PNG images (supported by modern browsers/search engines).
  $pngs = @()
  foreach ($p in $PngPaths) {
    if (-not (Test-Path -LiteralPath $p)) { throw "Missing PNG for ICO: $p" }
    $bytes = [System.IO.File]::ReadAllBytes($p)
    $img = [System.Drawing.Image]::FromFile($p)
    try {
      $pngs += [pscustomobject]@{
        Path  = $p
        Bytes = $bytes
        W     = [int]$img.Width
        H     = [int]$img.Height
      }
    } finally {
      $img.Dispose()
    }
  }

  $count = $pngs.Count
  $headerSize = 6
  $entrySize = 16
  $offset = $headerSize + ($entrySize * $count)

  $ms = New-Object System.IO.MemoryStream
  $bw = New-Object System.IO.BinaryWriter($ms)
  try {
    # ICONDIR
    $bw.Write([UInt16]0)      # reserved
    $bw.Write([UInt16]1)      # type: icon
    $bw.Write([UInt16]$count) # count

    # ICONDIRENTRYs
    foreach ($p in $pngs) {
      $w = $p.W
      $h = $p.H
      $bw.Write([Byte]($w -eq 256 ? 0 : $w))
      $bw.Write([Byte]($h -eq 256 ? 0 : $h))
      $bw.Write([Byte]0) # color count
      $bw.Write([Byte]0) # reserved
      $bw.Write([UInt16]1)  # planes
      $bw.Write([UInt16]32) # bit count
      $bw.Write([UInt32]$p.Bytes.Length) # bytes in res
      $bw.Write([UInt32]$offset)         # image offset
      $offset += $p.Bytes.Length
    }

    # Image data (PNG blobs)
    foreach ($p in $pngs) {
      $bw.Write($p.Bytes)
    }

    [System.IO.File]::WriteAllBytes($OutPath, $ms.ToArray())
    Write-Host "Wrote $OutPath"
  } finally {
    $bw.Dispose()
    $ms.Dispose()
  }
}

if (-not (Test-Path -LiteralPath $InputPath)) {
  throw "Input not found: $InputPath"
}

if (-not (Test-Path -LiteralPath $OutDir)) {
  New-Item -ItemType Directory -Path $OutDir | Out-Null
}

$src = [System.Drawing.Bitmap]::FromFile($InputPath)
try {
  $crop = Get-AlphaBounds -Bitmap $src
  Write-Host "Using crop rect: $($crop.X),$($crop.Y) $($crop.Width)x$($crop.Height) from $($src.Width)x$($src.Height)"

  $sizes = @(16, 32, 48, 180, 192, 512)
  foreach ($s in $sizes) {
    $outPath = Join-Path $OutDir ("favicon-{0}.png" -f $s)
    $bmp = New-FaviconBitmap -Size $s -Source $src -CropRect $crop
    try {
      $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
      Write-Host "Wrote $outPath"
    } finally {
      $bmp.Dispose()
    }
  }

  # Write a root favicon.ico for maximum compatibility (Google/Bing often prefer /favicon.ico)
  Write-IcoFromPngs -PngPaths @(
    (Join-Path $OutDir "favicon-16.png"),
    (Join-Path $OutDir "favicon-32.png"),
    (Join-Path $OutDir "favicon-48.png")
  ) -OutPath "favicon.ico"
} finally {
  $src.Dispose()
}
