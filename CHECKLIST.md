## ✅ CHECKLIST DE CONFIGURACIÓN

Use este checklist para asegurarse que todo está bien configurado antes de empezar.

### 🔧 Instalación local

- [ ] Node.js instalado (verificar: `node --version`)
- [ ] Repositorio clonado o descargado
- [ ] Terminal abierta en la carpeta del proyecto
- [ ] Ejecuté `npm install` sin errores

### 🔑 Credenciales de Baserow

- [ ] Cuenta Baserow creada (baserow.io)
- [ ] Base de datos creada en Baserow
- [ ] Tabla creada con datos
- [ ] Token API generado en Settings → Account
- [ ] Token copiado correctamente (sin espacios extras)
- [ ] DB_ID anotado (de la URL)
- [ ] TABLE_ID anotado (de la URL)

### 📝 Configuración del código

**En src/config.js:**

- [ ] `BASEROW.urlBaserow` = 'https://api.baserow.io'
- [ ] `BASEROW.token` = tu token (pegado correctamente)
- [ ] `BASEROW.idBaseDatos` = tu número (sin comillas)
- [ ] `TABLA_PROYECTOS.id` = tu número (sin comillas)
- [ ] `TABLA_PROYECTOS.campos.titulo` = nombre exacto en Baserow
- [ ] `TABLA_PROYECTOS.campos.descripcion` = nombre exacto
- [ ] `TABLA_PROYECTOS.campos.imagen` = nombre exacto
- [ ] `TABLA_PROYECTOS.campos.enlace` = nombre exacto (o eliminar si no existe)
- [ ] `SITIO.titulo` = tu título
- [ ] `SITIO.descripcion` = tu descripción
- [ ] `SITIO.autor` = tu nombre
- [ ] `SITIO.urlSitio` = tu URL (temporal está bien)
- [ ] Sin errores de sintaxis (revisa { } y " ")

### 🚀 Probar localmente

- [ ] Ejecuté `npm run dev`
- [ ] Abrí http://localhost:3000 en navegador
- [ ] Veo el contenido de Baserow
- [ ] Abro consola (F12) y no hay errores rojos
- [ ] Los datos coinciden con lo que está en Baserow
- [ ] Las tarjetas/componentes se ven bien

### 🎨 Personalización básica

- [ ] Edité `src/scss/estilos.scss` (colores, fuentes)
- [ ] Edité `index.html` (título, navegación)
- [ ] Agregué mi logo/imágenes en `estaticos/`
- [ ] Cambié los metadatos (og:image, descripción)

### 🐙 GitHub y publicación

- [ ] Cuenta GitHub creada
- [ ] Nuevo repositorio creado en GitHub (público)
- [ ] .gitignore configurado (no sube token)
- [ ] Código clonado/sincronizado con GitHub Desktop
- [ ] Ejecuté `npm run build` sin errores
- [ ] Carpeta `dist/` se creó correctamente
- [ ] Los archivos se commiteron
- [ ] Se hizo push a la rama main
- [ ] GitHub Pages configurado (Settings → Pages)
- [ ] Rama seleccionada: **main**
- [ ] Carpeta seleccionada: **/ (root)**
- [ ] Esperé 3-5 minutos
- [ ] Mi sitio aparece en GitHub Pages

### 🔐 Seguridad

- [ ] Token NO está en el repositorio de GitHub
- [ ] `.env` está en `.gitignore` (si lo usas)
- [ ] No compartí el token en redes sociales
- [ ] No sé de dónde vino el token, está oculto

### 🆘 Troubleshooting previo

Antes de pedir ayuda, verifica:

- [ ] Consola (F12) no muestra errores rojos
- [ ] Token es correcto (generé uno nuevo si dudaba)
- [ ] ID de tabla es correcto (lo verifiqué en URL)
- [ ] Nombres de campos coinciden exactamente (mayúsculas)
- [ ] Baserow tiene datos visibles en su tabla
- [ ] Internet funciona correctamente
- [ ] No estoy en VPN que bloquee APIs
- [ ] Vite config no tiene `base:` descomentado incorrectamente

### 📚 Documentación leída

- [ ] COMIENZA_AQUI.md
- [ ] INICIO_RAPIDO.md
- [ ] Entendí el flujo de Baserow → API → Sitio

### 🎓 Listo para aprender

- [ ] Entiendo qué es un token API
- [ ] Entiendo qué es Baserow
- [ ] Entiendo qué hace `src/config.js`
- [ ] Entiendo qué hace `src/programa.js`
- [ ] Sé dónde agregar más tablas
- [ ] Sé dónde cambiar estilos
- [ ] Sé cómo publicar cambios

---

## Si algo falló:

1. **Error en `npm install`**
   - Borra `node_modules` y `package-lock.json`
   - Ejecuta de nuevo `npm install`

2. **Error en consola (F12): "Error de autenticación"**
   - Tu token es incorrecto
   - Genera uno nuevo en Baserow

3. **Error en consola: "No se encontró la tabla"**
   - Tu TABLE_ID es incorrecto
   - Verifica en la URL de Baserow

4. **No veo datos pero tampoco error**
   - Los nombres de campos no coinciden
   - Copia exactamente desde Baserow

5. **`npm run build` falla**
   - Error de sintaxis en JavaScript
   - Revisa consola para el número de línea
   - Busca { } o " " que cierren mal

6. **Sitio no aparece en GitHub Pages**
   - Espera más tiempo
   - Recarga con Ctrl+F5
   - Verifica que carpeta sea /(root)
   - Verifica rama sea main

---

**¿Completaste todo? ¡Ahora puedes empezar a personalizar tu sitio!** 🎉

Para más ayuda, consulta [FAQ.md](FAQ.md)
