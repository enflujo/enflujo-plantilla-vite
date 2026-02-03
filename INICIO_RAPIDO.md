## GUÍA DE INICIO RÁPIDO - PRIMEROS PASOS

> Si nunca has usado Baserow ni GitHub Pages, comienza aquí.

### Paso 1: Crear una cuenta Baserow (5 min)

1. Abre https://baserow.io
2. Haz clic en "Sign up" (Registrarse)
3. Completa el formulario con:
   - Email
   - Contraseña
   - Tu nombre
4. Confirma tu correo (revisa el email)

**Listo, ya tienes una cuenta Baserow gratis** ✅

### Paso 2: Crear tu base de datos (10 min)

1. En Baserow, haz clic en **"Create an application"** o **"Create"**
2. Dale un nombre (ejemplo: "Mi Portafolio")
3. Selecciona **"Database"**
4. Haz clic en **"Create"**

Ahora estás en tu base de datos vacía.

### Paso 3: Crear una tabla (10 min)

1. Haz clic en **"Create a new table"**
2. Dale un nombre: "Proyectos" (sin tildes, sin espacios raros)
3. Haz clic en **"Create table"**

Verás una tabla vacía con una columna "Name".

### Paso 4: Agregar columnas (5 min)

Tu tabla necesita campos para que el sitio funcione. Agrega:

1. Haz clic en **"+"** a la derecha de "Name"
2. Crea estos campos:
   - **Título** (tipo: Single line text) - Renombra "Name" a "Título"
   - **Descripción** (tipo: Long text)
   - **Imagen** (tipo: Single line text) - la URL de la imagen
   - **Enlace** (tipo: Single line text) - link externo (opcional)
   - **Fecha** (tipo: Date) - opcional

Así queda:

```
| Título | Descripción | Imagen | Enlace | Fecha |
|--------|-------------|--------|--------|-------|
|        |             |        |        |       |
```

### Paso 5: Agregar datos de ejemplo (10 min)

Agrega algunos proyectos:

| Título             | Descripción      | Imagen                          | Enlace             |
| ------------------ | ---------------- | ------------------------------- | ------------------ |
| Mi primer proyecto | Una descripción  | https://via.placeholder.com/300 | https://google.com |
| Proyecto 2         | Otra descripción | https://via.placeholder.com/300 | https://google.com |

### Paso 6: Obtener tu Token API (5 min)

1. Haz clic en tu perfil (arriba a la derecha)
2. Ve a **Settings** → **Account**
3. Busca **"API Tokens"**
4. Haz clic en **"Create token"**
5. Dale un nombre: "Mi Sitio"
6. Cópialo (se ve así: `ab1234xyz...`)

**IMPORTANTE**: Guarda este token en un lugar seguro. No lo compartas con nadie.

### Paso 7: Obtener tus IDs (5 min)

1. Ve a tu base de datos
2. Mira la URL en el navegador:

   ```
   https://api.baserow.io/database/12345/table/67890/
   ```

   - `12345` = Tu DB_ID
   - `67890` = Tu TABLE_ID

Copia estos números.

### Paso 8: Configurar la plantilla (5 min)

1. Abre el archivo `src/config.js`
2. Busca esto y llénalo:

```javascript
export const BASEROW = {
  urlBaserow: 'https://api.baserow.io', // Mantén así
  token: 'TU_TOKEN_AQUI', // Reemplaza con tu token
  idBaseDatos: 12345, // Tu número
};

export const TABLA_PROYECTOS = {
  id: 67890, // Tu número
  campos: {
    titulo: 'Título', // Igual al nombre en Baserow
    descripcion: 'Descripción', // Igual al nombre en Baserow
    imagen: 'Imagen', // Igual al nombre en Baserow
    enlace: 'Enlace', // Igual al nombre en Baserow
  },
};

export const SITIO = {
  titulo: 'Mi Sitio', // El nombre que quieras
  descripcion: 'Mi primer sitio', // Descripción breve
  autor: 'Tu nombre aquí', // Tu nombre
  urlSitio: 'https://ejemplo.com', // URL de prueba
};
```

### Paso 9: Probar localmente (5 min)

1. Abre la terminal en la carpeta del proyecto
2. Escribe: `npm run dev`
3. Abre http://localhost:3000 en el navegador

**¡Deberías ver tus proyectos de Baserow!** 🎉

### Paso 10: Publicar en GitHub Pages (15 min)

#### A. Crear repositorio en GitHub

1. Ve a https://github.com y inicia sesión (crea cuenta si no tienes)
2. Haz clic en **"+"** → **"New repository"**
3. Nombre: `mi-sitio` (o el que prefieras)
4. Marca **"Public"** (para que sea visible)
5. Haz clic en **"Create repository"**
6. **NO** inicialices con README. Déjalo vacío.

#### B. Descargar GitHub Desktop

1. Ve a https://desktop.github.com
2. Descarga GitHub Desktop
3. Instálalo

#### C. Clonar y subir

1. En GitHub.com, en tu repositorio, haz clic en **Code** → **Open with GitHub Desktop**
2. Elige dónde guardar (cualquier carpeta)
3. Abre esa carpeta con el Explorador de Archivos
4. **Borra TODO** lo que haya adentro
5. Copia todos los archivos de la plantilla en esa carpeta

#### D. Publicar

1. Abre GitHub Desktop
2. Verás muchos cambios (eso es normal)
3. En el campo "Summary", escribe: `Primera publicación`
4. Haz clic en **"Commit to main"**
5. Arriba haz clic en **"Publish branch"**

#### E. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub.com
2. Ve a **Settings** → **Pages**
3. En "Source" selecciona **"Deploy from a branch"**
4. Rama: **main**
5. Carpeta: **/root** ← IMPORTANTE
6. Haz clic en **"Save"**

Espera 2-3 minutos y tu sitio estará en:

```
https://tuusuario.github.io/mi-sitio
```

### 🎉 ¡LISTO!

Tu sitio está en línea. Cada vez que:

1. Agregues datos en Baserow
2. Hagas clic en actualizar en el navegador

Tu sitio mostrará los cambios automáticamente.

## Siguiente nivel: Personalización

Una vez funcione, puedes:

- ✏️ Cambiar colores en `src/scss/estilos.scss`
- 🎨 Agregar tu logo a `estaticos/`
- 📱 Mejorar el diseño en `index.html`
- 🔌 Agregar más tablas a `src/config.js`
- 💾 Agregar formulario de contacto

Consulta el README.md para estos pasos.

## Troubleshooting

**"No veo mis datos"**

- Abre la consola (F12) en el navegador
- Ves un error rojo? Significa que:
  - Tu token está mal
  - Tu DB_ID o TABLE_ID está mal
  - Los nombres de los campos no coinciden

**"Mi sitio no existe en GitHub Pages"**

- ¿Hiciste el último paso (Settings → Pages)?
- ¿Subiste los archivos?
- Espera 5 minutos, a veces tarda
- Intenta refrescar la página (Ctrl + F5)

**Perdí mi token**

- Vuelve a Baserow
- Ve a Settings → API Tokens
- Borra el anterior y crea uno nuevo

¡Éxito! 🚀
