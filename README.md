# Node-RED y Home Assistant con Docker Compose

## Descripción
Configuración completa de Docker Compose para levantar Node-RED y Home Assistant con:
- ✅ HTTPS/SSL autofirmado en Node-RED
- ✅ Autenticación de usuario en Node-RED
- ✅ Volúmenes persistentes
- ✅ Configuración personalizada
- ✅ Home Assistant con acceso a hardware

## Instrucciones de uso

### 1. Inicialización
Ejecuta el script de inicialización para crear directorios y asignar permisos:
```bash
./init.sh
```

### 2. Iniciar los servicios
```bash
docker-compose up -d
```

### 2. Acceder a Node-RED
- **URL:** https://localhost:1880
- **Usuario:** admin
- **Contraseña:** admin

### 3. Acceder a Home Assistant
- **URL:** http://localhost:8123
- Configura el usuario administrador en la primera visita.

⚠️ **Nota:** El navegador mostrará una advertencia sobre certificado autofirmado en Node-RED. Es seguro continuar.

### 3. Cambiar la contraseña
Dentro de Node-RED, ve a **Menu > Admin Panel > Security** para cambiar credenciales.

## Estructura de archivos
```
.
├── docker-compose.yml           # Configuración de servicios
├── settings.js                  # Configuración de Node-RED con HTTPS y auth
├── init.sh                      # Script de inicialización
├── .gitignore                   # Archivos ignorados por Git
├── certs/                       # (se crea con init.sh)
│   ├── cert.pem
│   └── key.pem
├── node-red-data/               # (se crea con init.sh)
│   └── flows.json
└── home-assistant-config/       # (se crea con init.sh)
    ├── configuration.yaml
    └── home-assistant_v2.db
```

## APIs de prueba incluidas

Dentro de Node-RED, puedes crear flows que consulten estas APIs:

### Ejemplos recomendados:
1. **JSONPlaceholder** (sin auth)
   - GET https://jsonplaceholder.typicode.com/posts/1

2. **OpenWeatherMap** (requiere API key)
   - GET https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=YOUR_KEY

3. **GitHub API** (sin auth o con token)
   - GET https://api.github.com/users/github

4. **RestAPI Example**
   - GET https://restcountries.com/v3.1/all

## Home Assistant

Home Assistant está configurado para automatización del hogar con acceso a dispositivos locales.

### Características
- ✅ Automatización de hogar inteligente
- ✅ Integración con dispositivos IoT
- ✅ Dashboard web personalizable
- ✅ API REST para integración con Node-RED

### Integración con Node-RED
Puedes crear flows en Node-RED que interactúen con Home Assistant vía API:
- **URL de HA:** http://localhost:8123/api/
- **Autenticación:** Bearer token (obtén desde HA > Profile > Long-Lived Access Tokens)

Ejemplo de flow: Enviar notificaciones desde Node-RED a HA.

## Parar los servicios
```bash
docker-compose down
```

## Eliminar volúmenes (reset completo)
```bash
docker-compose down -v
```
Esto eliminará todos los datos de Node-RED y Home Assistant.

## Notas importantes
- Los datos de Node-RED se persisten en `node-red-data/`
- Los certificados SSL se generan automáticamente en la primera ejecución
- Para producción, usar certificados válidos (Let's Encrypt, etc.)
- La contraseña por defecto es: `admin` / `admin`
