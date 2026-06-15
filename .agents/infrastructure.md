# Mapa de Infraestructura: WAHA

## 1. Identidad del Entorno
* **Stack Principal:** WhatsApp HTTP API (WAHA) - NestJS / Node.js
* **Orquestador Local:** Docker Compose
* **Gestión de Despliegue:** Manual / Docker Compose

## 2. Puntos de Acceso (Restricción Estricta)
> **AGENTE:** Prohibido adivinar. Usa EXCLUSIVAMENTE estas rutas para este proyecto.

* **Web/API Principal:** `http://127.0.0.1:3000`
* **Supabase Studio (Si aplica):** N/A
* **Base de Datos Directa:** SQLite local (sin credenciales directas de red)
* **Webhook n8n (Si aplica):** N/A

## 3. Reglas de Arquitectura de Datos
* **Aislamiento:** Aislamiento de sesiones WAHA local (se almacenan en el directorio `./sessions` local)
* **Capas de Datos:** N/A
* Las credenciales maestras y configuraciones de entorno viven en el archivo `.env`. NUNCA persistirlas aquí. Todas las contraseñas reales deben leerse del archivo `.env` y NUNCA escribirse en texto plano en este documento.

## 4. Operación del Entorno
* **Levantar:** `docker compose up -d`
* **Apagar:** `docker compose down`
* **Logs:** `docker compose logs -f waha`
