module.exports = {
    // Puerto HTTPS
    https: {
        key: require("fs").readFileSync("/certs/key.pem"),
        cert: require("fs").readFileSync("/certs/cert.pem")
    },

    // Puerto HTTP (opcional)
    httpAdminRoot: "/",
    httpNodeRoot: "/api",

    // Autenticación básica
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                password: "$2y$08$ZlbIVSQT7Jb9KFpoObBAV.8N4dlXN5H.j3iZZZVqS5kP3Srj4OaJa",  // contraseña: admin
                permissions: "*"
            }
        ]
    },

    // Habilitar API editor
    editorTheme: {
        projects: {
            enabled: true
        }
    },

    // Configurar funciones de usuario
    functionGlobalContext: {
        // Ejemplo: agregar utilidades globales
    },

    // Contexto persistente
    contextStorage: {
        default: {
            module: "localfilesystem"
        }
    },

    // Logging
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    // Limpieza de sesión
    sessionExpiryTime: 604800  // 7 días en segundos
};
