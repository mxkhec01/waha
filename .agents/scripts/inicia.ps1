# script de inicio de servicios locales para WAHA
# Busca y mata procesos en el puerto 3000 (puerto de la API)

$port = 3000
Write-Host "Buscando procesos en el puerto $port..." -ForegroundColor Cyan

$process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique

if ($process) {
    Write-Host "Mando a detener el proceso con ID: $process que ocupa el puerto $port" -ForegroundColor Yellow
    foreach ($pId in $process) {
        try {
            Stop-Process -Id $pId -Force -Confirm:$false
            Write-Host "Proceso $pId detenido exitosamente." -ForegroundColor Green
        } catch {
            Write-Warning "No se pudo detener el proceso $pId: $_"
        }
    }
} else {
    Write-Host "Puerto $port libre." -ForegroundColor Green
}

Write-Host "Iniciando el servidor de desarrollo WAHA (yarn start:dev)..." -ForegroundColor Cyan
yarn start:dev
