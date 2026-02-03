## PREGUNTAS FRECUENTES (FAQ)

### 🔴 PROBLEMAS COMUNES

#### "No veo mis datos de Baserow en el sitio"

**Pasos para solucionar:**

1. **Abre la consola del navegador**
   - En Windows: Presiona `F12` o `Ctrl + Shift + I`
   - En Mac: Presiona `Cmd + Option + I`
   - Haz clic en la pestaña "Console"

2. **Busca un error rojo**
   - Si dice "Error de autenticación" → Tu **token** está mal
   - Si dice "No se encontró la tabla" → Tu **ID de tabla** está mal
   - Si no hay errores rojos → Escribe en la consola: `console.log(BASEROW)`

3. **Verifica tus credenciales**
   - ¿Copiaste el **token completo** desde Baserow?
   - ¿Pusiste los **números correctos** para DB_ID y TABLE_ID?
   - ¿Los **nombres de los campos** en config.js coinciden exactamente con Baserow?
     - En Baserow: "Título" (con tilde)
     - En config.js: `titulo: 'Título'` (con tilde)

4. **Prueba nuevamente**
   - Presiona `Ctrl + Shift + R` (fuerza refrescar)
   - Busca en la consola si aparecen tus datos

---

#### "Mi sitio no aparece en GitHub Pages"

**Pasos para solucionar:**

1. **¿Hiciste el `yarn build`?**

   ```bash
   yarn build
   ```

   Esto crea la carpeta `dist/` que GitHub Pages publica.

2. **¿Subiste los cambios a GitHub?**
   - En GitHub Desktop: Commit → Publish
   - O en terminal: `git add . && git commit -m "Build" && git push`

3. **Verifica la configuración en GitHub**
   - Ve a tu repositorio en GitHub.com
   - **Settings** → **Pages**
   - "Source" debe ser: **Deploy from a branch**
   - "Branch": **main** (o master)
   - "Folder": **/ (root)** ← IMPORTANTE

4. **Espera 3-5 minutos**
   - A veces GitHub tarda en procesar
   - Refresca la página (Ctrl + F5)

5. **¿Publicas en una subruta?**
   - Si tu sitio es: `usuario.github.io/nombre-repo`
   - En `vite.config.js` cambia:
     ```javascript
     base: '/nombre-repo/',
     ```
     Luego: `npm run build` y sube los cambios

---

#### "Los estilos no se cargan"

**Pasos:**

```bash
# Elimina la carpeta node_modules
rm -r node_modules

# Elimina package-lock.json
rm package-lock.json

# Reinstala
npm install

# Prueba de nuevo
npm run dev
```

---

#### "¿Cómo cambio mis credenciales sin que se vean en el sitio?"

Tu token está **guardado en el código**. Si lo subes a GitHub, ¡alguien puede verlo!

**Solución segura:**

1. Crea el archivo `.env` en la raíz del proyecto:

   ```
   VITE_BASEROW_TOKEN=tu_token_aqui
   VITE_BASEROW_URL=https://api.baserow.io
   ```

2. En `src/config.js`:

   ```javascript
   export const BASEROW = {
     urlBaserow: import.meta.env.VITE_BASEROW_URL,
     token: import.meta.env.VITE_BASEROW_TOKEN,
     idBaseDatos: 12345,
   };
   ```

3. **Agrega `.env` al `.gitignore`** (así no se sube a GitHub)

---

### ❓ PREGUNTAS CONCEPTUALES

#### "¿Qué es Baserow?"

Baserow es como una combinación entre Excel y una base de datos.

- Es gratis
- No necesitas instalación
- Los datos están en la nube
- Tiene una API para conectarla con otros sitios

Alternativas: Airtable, Google Sheets, Notion

#### "¿Qué es GitHub Pages?"

Un servicio de GitHub que publica sitios web **gratis**.

- Ideal para sitios estáticos (HTML + CSS + JS)
- No soporta bases de datos (por eso usamos Baserow)
- Cada repositorio puede tener un sitio
- Los cambios se publican en segundos

#### "¿Puedo usar otra base de datos en lugar de Baserow?"

Sí, siempre y cuando tenga API. Necesitarías cambiar `src/baserow.js`.

Opciones:

- **Airtable** (API parecida)
- **Google Sheets** (con API)
- **Firebase** (más complejo)
- **Tu propio servidor** (más avanzado)

#### "¿Necesito pagar por nada?"

**No.** Todo es gratis:

- Baserow: Gratis
- GitHub Pages: Gratis
- Node.js: Gratis
- Vite: Gratis
- Dominio: Gratis (usuario.github.io)

Opcional de pago:

- Dominio propio (ejemplo.com): ~10-15 USD/año
- Servidor propio: Depende del proveedor

---

### 🚀 PREGUNTAS AVANZADAS

#### "¿Cómo agrego más tablas?"

1. En Baserow, crea una nueva tabla
2. En `src/config.js`:
   ```javascript
   export const TABLA_NUEVA = {
     id: 999999,
     campos: {
       campo1: 'Campo 1',
       campo2: 'Campo 2',
     },
   };
   ```
3. En `src/programa.js`:

   ```javascript
   import { TABLA_NUEVA } from './config.js';

   async function cargarNueva() {
     const datos = await obtenerRegistrosTabla(TABLA_NUEVA.id);
     // Hacer algo con los datos
   }
   ```

#### "¿Cómo envío datos desde el sitio a Baserow?"

Usa la función `crearRegistro()` en `src/baserow.js`:

```javascript
import { crearRegistro } from './baserow.js';
import { TABLA_CONTACTOS } from './config.js';

const boton = document.querySelector('button');
boton.addEventListener('click', async () => {
  await crearRegistro(TABLA_CONTACTOS.id, {
    Nombre: 'Juan',
    Email: 'juan@ejemplo.com',
    Mensaje: 'Hola!',
  });
});
```

#### "¿Cómo filtro datos?"

```javascript
const proyectos = await obtenerRegistrosTabla(TABLA_PROYECTOS.id);

// Filtrar por título
const filtrados = proyectos.filter((p) => p['Título'].includes('Python'));

// Mostrar solo los primeros 5
const primeros5 = proyectos.slice(0, 5);
```

#### "¿Cómo ordeno los datos?"

```javascript
const proyectos = await obtenerRegistrosTabla(TABLA_PROYECTOS.id);

// Ordenar por fecha (reciente primero)
proyectos.sort((a, b) => new Date(b['Fecha']) - new Date(a['Fecha']));

// Ordenar por título alfabético
proyectos.sort((a, b) => a['Título'].localeCompare(b['Título']));
```

#### "¿Cómo hago que se actualice sin refrescar?"

```javascript
// Recargar cada 5 minutos
setInterval(
  async () => {
    const nuevos = await obtenerRegistrosTabla(TABLA_PROYECTOS.id);
    // Actualizar la página
  },
  5 * 60 * 1000
); // 5 minutos en milisegundos
```

#### "¿Cómo agrego un dominio propio?"

1. Compra un dominio (ejemplo.com) en GoDaddy, Namecheap, etc.
2. En GitHub:
   - **Settings** → **Pages**
   - En "Custom domain" escribe: ejemplo.com
   - Marca "Enforce HTTPS"
3. En tu registrador de dominio, configura el DNS:
   - Crea un registro CNAME apuntando a `usuario.github.io`
   - O sigue las instrucciones específicas de GitHub

Tarda 24-48 horas en funcionar.

#### "¿Cómo hago búsqueda en tiempo real?"

```javascript
const input = document.querySelector('input');

input.addEventListener('input', (e) => {
  const termino = e.target.value.toLowerCase();

  const tarjetas = document.querySelectorAll('.tarjeta-proyecto');
  tarjetas.forEach((tarjeta) => {
    const texto = tarjeta.textContent.toLowerCase();
    tarjeta.style.display = texto.includes(termino) ? '' : 'none';
  });
});
```

---

### 📱 PREGUNTAS SOBRE DISEÑO

#### "¿Cómo hago que se vea bien en móviles?"

Los estilos ya son responsivos. Pero puedes mejorarlo en `src/scss/estilos.scss`:

```scss
@media (max-width: 768px) {
  .proyectos-grid {
    grid-template-columns: 1fr; // Una columna en móvil
  }

  h1 {
    font-size: 1.5rem; // Más pequeño
  }
}
```

#### "¿Cómo cambio los colores rápidamente?"

En `src/scss/estilos.scss`, al inicio hay variables:

```scss
$color-primario: #30cac0; // Turquesa
$color-secundario: #130808; // Negro
$color-texto: #333;
$color-fondo: #ffffff;
```

Cambia estos colores y listo. Todos los elementos usan estos valores.

#### "¿Cómo agrego una imagen de fondo?"

En `src/scss/estilos.scss`:

```scss
header {
  background-image: url('https://ejemplo.com/imagen.jpg');
  background-size: cover;
  background-position: center;
}
```

---

### ❓ MÁS AYUDA

Si tu pregunta no está aquí:

1. **Revisa la consola** (F12) - Muchas veces el error está ahí
2. **Lee el README.md** - Tiene información detallada
3. **Revisa INICIO_RAPIDO.md** - Para configuración básica
4. **Mira EJEMPLOS_AVANZADOS.js** - Para código listo para copiar
5. **Busca en Google** - Muchos problemas ya tienen solución

---

¡Buena suerte con tu sitio! 🚀
