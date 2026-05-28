$nodePath = "C:\Program Files\nodejs"
if (Test-Path $nodePath) {
  $env:Path = "$env:Path;$nodePath"
}

Set-Location $PSScriptRoot
& "npm.cmd" run dev
