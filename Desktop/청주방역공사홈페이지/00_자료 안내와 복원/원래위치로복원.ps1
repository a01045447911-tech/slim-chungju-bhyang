$ErrorActionPreference='Stop'
foreach($entry in (Import-Csv -LiteralPath (Join-Path $PSScriptRoot '이동내역.csv'))) {
 if(Test-Path -LiteralPath $entry.Destination) {
  if(Test-Path -LiteralPath $entry.Source) {throw "Original path occupied: $($entry.Source)"}
  Move-Item -LiteralPath $entry.Destination -Destination $entry.Source
 }
}
Write-Host '원래 위치로 복원했습니다. 정리용 빈 폴더는 남아 있습니다.'
