# Sitio Dinámico con Baserow y GitHub Pages

Esta es una plantilla lista para que estudiantes creen sitios dinámicos conectados a **Baserow** y publicados en **GitHub Pages**.

## ¿Qué es esto?

- **Baserow**: Una base de datos de código abierto que funciona como un Excel avanzado en la web
- **GitHub Pages**: Servicio gratuito de GitHub para publicar sitios web estáticos
- **Esta plantilla**: Conecta Baserow con GitHub Pages para crear un sitio que se actualiza automáticamente

## Inicio Rápido

### 1️⃣ Preparar tu cuenta Baserow

1. Ve a [baserow.io](https://baserow.io) y crea una cuenta gratuita
2. Crea una nueva **Base de Datos**
3. Crea una **Tabla** con los campos que quieras mostrar (ejemplo: "Proyectos")
4. Agrega datos a tu tabla

### 2️⃣ Obtener las credenciales de Baserow

1. En Baserow, ve a **Settings** → **Account** → **API tokens**
2. Crea un nuevo token y cópialo
3. Ve a tu base de datos y anota estos números de la URL:
   - `https://api.baserow.io/database/[DB_ID]/table/[TABLE_ID]/`
   - **DB_ID**: ID de tu base de datos
   - **TABLE_ID**: ID de tu tabla

### 3️⃣ Configurar la plantilla

1. Abre el archivo `src/config.js`
2. Llena los campos con tu información:

```javascript
export const BASEROW = {
  urlBaserow: 'https://api.baserow.io',
  token: 'TU_TOKEN_AQUI',
  idBaseDatos: 123456, // Tu número
};

export const TABLA_PROYECTOS = {
  id: 654321, // Tu número
  campos: {
    titulo: 'Título', // Nombre exacto de tu columna en Baserow
    descripcion: 'Descripción',
    imagen: 'Imagen',
    enlace: 'Enlace',
  },
};
```

### 4️⃣ Instalar dependencias

```bash
npm install
```

### 5️⃣ Probar localmente

```bash
npm run dev
```

Visita `http://localhost:3000` en tu navegador. Deberías ver tu contenido de Baserow.

### 6️⃣ Publicar en GitHub Pages

#### Opción A: Usando GitHub Desktop (Recomendado para principiantes)

1. Abre [GitHub.com](https://github.com) y crea un nuevo repositorio
2. Clona el repositorio en tu computadora con GitHub Desktop
3. Copia los archivos de esta plantilla en la carpeta del repositorio
4. En la terminal, dentro de la carpeta del proyecto:
   ```bash
   npm run build
   ```
5. Abre GitHub Desktop, verás los cambios
6. Escribe un mensaje (ej: "Primera publicación") y haz clic en "Commit"
7. Haz clic en "Publish branch"
8. En GitHub.com, ve a **Settings** → **Pages** → Selecciona **Deploy from a branch** → Rama **main** → Carpeta **/(root)**
9. ¡Listo! En unos minutos tu sitio estará en línea

#### Opción B: Usar Actions de GitHub (Automático)

Crea un archivo `.github/workflows/build-and-deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Así, cada vez que hagas push, el sitio se actualiza automáticamente.

## Estructura de Archivos

```
proyecto/
├── src/
│   ├── config.js              ⭐ EDITAR: Tu configuración de Baserow
│   ├── programa.js             Código principal (lógica del sitio)
│   ├── baserow.js              Módulo para conectar con Baserow
│   ├── componentes.js          Funciones para crear elementos HTML
│   └── scss/
│       └── estilos.scss        ⭐ EDITAR: Tus estilos personalizados
├── index.html                  ⭐ EDITAR: Estructura HTML del sitio
├── vite.config.js              ⭐ EDITAR: Configuración si publicas en subruta
├── package.json                Dependencias del proyecto
└── estaticos/                  Carpeta para imágenes y otros archivos

⭐ = Archivos que probablemente necesitarás editar
```

## Personalización

### Cambiar colores

Abre `src/scss/estilos.scss` y modifica las variables al inicio:

```scss
$color-primario: #30cac0; // Color principal (turquesa)
$color-secundario: #130808; // Color secundario (negro)
$color-texto: #333; // Color del texto
$color-fondo: #ffffff; // Color de fondo
```

### Cambiar fuentes

En `src/scss/estilos.scss`:

```scss
$font-principal: 'Tu Font Aqui', sans-serif;
$font-tamaño-base: 16px; // Tamaño base
```

### Agregar más tablas

1. En `src/config.js`, agrega una nueva tabla:

```javascript
export const TABLA_ARTICULOS = {
  id: 999999,
  campos: {
    titulo: 'Título',
    contenido: 'Contenido',
    fecha: 'Publicado',
  },
};
```

2. En `src/programa.js`, carga esa tabla:

```javascript
import { TABLA_ARTICULOS } from './config.js';
import { crearListaArticulos } from './componentes.js';

async function cargarArticulos() {
  const articulos = await obtenerRegistrosTabla(TABLA_ARTICULOS.id);
  const lista = crearListaArticulos(articulos);
  document.querySelector('main').appendChild(lista);
}

cargarArticulos();
```

### Usar otros componentes

El archivo `src/componentes.js` tiene funciones listas:

- `crearTarjetaProyecto()` - Crea una tarjeta con imagen y enlace
- `crearListaArticulos()` - Lista de artículos con fechas
- `crearGaleria()` - Galería de imágenes
- `crearHereo()` - Banner al inicio de la página
- `crearSeccion()` - Sección genérica

Ejemplo:

```javascript
import { crearGaleria } from './componentes.js';

const galeria = crearGaleria([
  {
    url: 'https://ejemplo.com/foto1.jpg',
    titulo: 'Mi primera foto',
    descripcion: 'Tomada en...',
  },
]);

document.querySelector('main').appendChild(galeria);
```

## Solucionar Problemas

### ❌ "No veo mis datos de Baserow"

1. **Revisa la consola del navegador** (F12 → Console):
   - Si ves "Error de autenticación", tu token es incorrecto
   - Si ves "No se encontró la tabla", tu ID de tabla es incorrecto

2. **Verifica en Baserow**:
   - ¿Los datos están visibles en Baserow?
   - ¿Copiaste el token completo?
   - ¿Los IDs (DB_ID y TABLE_ID) son correctos?

3. **Comprueba los nombres de campos**:
   - En `config.js`, los nombres deben coincidir exactamente con los nombres en Baserow
   - Las mayúsculas importan

### ❌ "Mi sitio no se ve en GitHub Pages"

1. Asegúrate de haber hecho `yarn build`
2. Verifica en **Settings** →npm ruPages\*\* que está configurado correctamente
3. Si publicas en una subruta, cambia en `vite.config.js`:
   ```javascript
   base: '/nombre-repositorio/',
   ```

### ❌ Los estilos no se cargan

Borra la carpeta `node_modules` y el archivo `yarn.lock`, luego:
package-lock.json`, luego:

````bash
npm install
npm ru

## Expandir el Proyecto

### Agregar formulario para recopilar datos

```javascript
async function crearFormulario() {
  // En src/programa.js
  const formulario = document.createElement('form');
  // Agregar campos...
  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Llamar a crearRegistro() de baserow.js
  });
}
````

### Agregar búsqueda y filtros

```javascript
function filtrarProyectos(termino) {
  const proyectos = document.querySelectorAll('.tarjeta-proyecto');
  proyectos.forEach((tarjeta) => {
    const titulo = tarjeta.textContent.toLowerCase();
    if (titulo.includes(termino.toLowerCase())) {
      tarjeta.style.display = '';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}
```

### Agregar paginación

En `src/baserow.js`, la función `obtenerRegistrosTabla()` puede filtrar por página:

```javascript
// Obtener página 2 (10 registros por página)
await obtenerRegistrosTabla(TABLA_PROYECTOS.id, {
  size: 10,
  page: 2,
});
```

## Recursos Útiles

- [Documentación de Baserow](https://baserow.io/docs)
- [GitHub Pages Docs](https://docs.github.com/es/pages)
- [MDN - Web Development](https://developer.mozilla.org/es/)
- [Guía de SCSS](https://sass-lang.com/guide)
- [API de Baserow](https://api.baserow.io/)

## Licencia

MIT - Libre para usar en proyectos personales y educativos.

## ¿Preguntas?

Si tienes dudas:

1. Revisa la consola del navegador (F12)
2. Verifica los datos en Baserow
3. Comprueba los valores en `config.js`

¡A crear sitios increíbles! 🚀
