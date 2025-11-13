#!/bin/bash

# Script de inicialización para SmartHome-Docker-Stack
# Crea directorios necesarios y asigna permisos

echo "🚀 Inicializando SmartHome-Docker-Stack..."

# Crear directorios
echo "📁 Creando directorios..."
mkdir -p certs
mkdir -p node-red-data
mkdir -p home-assistant-config

# Asignar permisos (usuario 1000:1000 para Docker)
echo "🔐 Asignando permisos..."
sudo chown -R 1000:1000 certs/ node-red-data/ home-assistant-config/

echo "✅ Inicialización completada!"
echo ""
echo "Ahora puedes ejecutar:"
echo "  docker-compose up -d"
echo ""
echo "Acceder a:"
echo "  - Node-RED: https://localhost:1880 (admin/admin)"
echo "  - Home Assistant: http://localhost:8123"