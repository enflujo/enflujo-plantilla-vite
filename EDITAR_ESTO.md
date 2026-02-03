## ✏️ GUÍA RÁPIDA: QUÉ EDITAR Y DÓNDE

Si tienes poco tiempo, aquí están los **SOLO 3 ARCHIVOS** que necesitas editar para empezar.

---

## 🎯 PRIORIDAD 1: Configuración (5 minutos)

### Archivo: `src/config.js`

Este es el único archivo crítico que DEBES editar.

```javascript
// 1. REEMPLAZA ESTO CON TU TOKEN
export const BASEROW = {
  token: 'TU_TOKEN_AQUI', // ← Genera en: baserow.io → Settings
  idBaseDatos: 12345, // ← De la URL de tu base de datos
};

// 2. REEMPLAZA ESTO CON TUS NÚMEROS DE TABLA
export const TABLA_PROYECTOS = {
  id: 67890, // ← De la URL de tu tabla
  campos: {
    titulo: 'Título', // ← Nombre exacto en Baserow
    descripcion: 'Descripción', // ← Nombre exacto en Baserow
    imagen: 'Imagen', // ← Nombre exacto en Baserow
    enlace: 'Enlace', // ← Nombre exacto en Baserow
  },
};

// 3. REEMPLAZA ESTO CON TUS DATOS
export const SITIO = {
  titulo: 'Mi Sitio Increíble',
  descripcion: 'Un sitio creado con Baserow',
  autor: 'Tu nombre',
  urlSitio: 'https://ejemplo.com',
};
```

**¿Dónde consigo estos valores?**

- **Token**: baserow.io → Settings → Account → API Tokens → Create
- **idBaseDatos**: URL de Baserow: `https://api.baserow.io/database/[ESTO]/`
- **TABLE_ID**: URL de tabla: `https://api.baserow.io/database/XX/table/[ESTO]/`
- **Nombres de campos**: Los nombres exactos de tus columnas en Baserow

---

## 🎨 PRIORIDAD 2: Estilos (10 minutos - opcional)

### Archivo: `src/scss/estilos.scss`

Al inicio del archivo, busca estas variables:

```scss
// Colores - CAMBIA ESTOS
$color-primario: #30cac0; // Color principal (ej: turquesa)
$color-secundario: #130808; // Color secundario (ej: negro)
$color-texto: #333; // Color del texto
$color-fondo: #ffffff; // Color de fondo
```

**Colores bonitos para copiar:**

- Azul: `#0066cc`
- Verde: `#00a86b`
- Rosa: `#ff1493`
- Naranja: `#ff7f00`
- Púrpura: `#8b00ff`

Busca `$font-principal:` para cambiar la fuente.

---

## 📄 PRIORIDAD 3: Contenido (5 minutos - opcional)

### Archivo: `index.html`

Busca y edita estos textos:

```html
<h1 class="navbar-titulo">Mi Sitio</h1>
<!-- Cambiar "Mi Sitio" por tu título -->

<title>Mi Sitio</title>
<!-- En la etiqueta <title> -->

<meta name="description" content="Un sitio creado con Baserow" />
<!-- Cambiar la descripción -->

<p>&copy; 2024 Mi Sitio. Creado con Baserow</p>
<!-- En el footer -->
```

---

## ✅ PASO A PASO RÁPIDO

1. **Abre** `src/config.js`
2. **Copia tu token** de Baserow
3. **Pega** en `token: 'TU_TOKEN_AQUI'`
4. **Escribe** el número DB_ID en `idBaseDatos: 12345`
5. **Escribe** el número TABLE_ID en `id: 67890`
6. **Verifica** que nombres de campos coinciden exactamente
7. **Guarda** el archivo
8. **Ejecuta** `npm run dev`
9. **Abre** http://localhost:3000
10. **Listo!** Deberías ver tus datos

---

## ❌ QUÉ NO TOCAR

**Estos archivos ya están configurados. NO los edites a menos que sepas qué haces:**

```
✗ src/baserow.js
✗ src/programa.js (aunque puedas leerlo)
✗ src/componentes.js (aunque puedas copiar de aquí)
✗ vite.config.js (salvo el base path)
✗ tsconfig.json
✗ postcss.config.cjs
✗ package.json
```

---

## 🔍 VERIFICA QUE FUNCIONA

1. Abre la consola (F12)
2. Busca mensajes rojos
3. Si ves "Error de autenticación" → Token mal
4. Si ves "No se encontró la tabla" → TABLE_ID mal
5. Si ves "CORS error" → Verifica que sea API Baserow
6. Si ves "undefined" en los datos → Nombres de campos no coinciden

---

## 🚀 SIGUIENTE: PERSONALIZACIÓN

Una vez funcione todo:

1. **Estilos** → Edita `src/scss/estilos.scss`
2. **Contenido** → Edita `index.html`
3. **Diseño** → Agrega tu logo en `estaticos/`
4. **Funcionalidad** → Lee `EJEMPLOS_AVANZADOS.js`

---

## 📞 SI ALGO FALLA

| Error                      | Solución                             |
| -------------------------- | ------------------------------------ |
| "Token inválido"           | Genera uno nuevo en Baserow          |
| "Tabla no encontrada"      | Verifica TABLE_ID en URL             |
| "Campos vacíos"            | Los nombres no coinciden exactamente |
| "No carga nada"            | Espera 5 seg, refresca Ctrl+F5       |
| No aparece en GitHub Pages | Hiciste `npm run build`?             |

---

**¡Eso es todo! Con solo editar `src/config.js` ya funciona.** 🎉

Los otros archivos son opcionales para personalizar.
