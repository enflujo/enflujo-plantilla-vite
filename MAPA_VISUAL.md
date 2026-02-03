## 🗺️ MAPA VISUAL DE LA PLANTILLA

### Cómo funciona el flujo

```
┌─────────────────────────────────────────────────────┐
│ TUS DATOS EN BASEROW                                │
│ (tabla: Proyectos, Artículos, etc)                 │
└────────────────┬────────────────────────────────────┘
                 │
                 │ API Token (seguro)
                 ↓
┌─────────────────────────────────────────────────────┐
│ src/baserow.js                                      │
│ (obtiene tus datos con axios)                       │
└────────────────┬────────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────────┐
│ src/programa.js                                     │
│ (procesa datos + llama componentes)                 │
└────────────────┬────────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────────┐
│ src/componentes.js                                  │
│ (crea HTML con los datos)                          │
└────────────────┬────────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────────┐
│ index.html + src/scss/estilos.scss                 │
│ (estructura + diseño)                              │
└────────────────┬────────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────────┐
│ SITIO WEB EN TU NAVEGADOR                           │
│ (http://localhost:3000)                             │
└─────────────────────────────────────────────────────┘
```

---

### ¿Qué archivo edito según lo que quiera?

```
¿QUIERO CAMBIAR...?
│
├─ Datos (tabla, campos)
│  └─ → Edita en Baserow (no en código)
│     → Los cambios aparecen automáticamente
│
├─ Información de conexión (token, ID)
│  └─ → Edita: src/config.js
│     → IMPORTANTE: No compartas el token
│
├─ Colores, fuentes, espacios
│  └─ → Edita: src/scss/estilos.scss
│     → Variables al inicio del archivo
│
├─ Título, navegación, secciones
│  └─ → Edita: index.html
│     → El contenido se genera automático
│
├─ Lo que ve el usuario (tarjetas, listas)
│  └─ → Edita: src/componentes.js
│     → Funciones que generan HTML
│
├─ Lógica de carga, filtros, búsqueda
│  └─ → Edita: src/programa.js
│     → Controla qué se muestra y cómo
│
├─ Cómo conecta con Baserow
│  └─ → Edita: src/baserow.js (avanzado)
│     → Usa las funciones que hay
│
└─ Dónde se publica (subruta)
   └─ → Edita: vite.config.js
      → Solo si publicas en /repositorio/
```

---

### Árbol de decisión: ¿Por dónde empiezo?

```
¿CUÁL ES TU SITUACIÓN?

┌─ ¿Nunca usé Baserow?
│  └─ → Lee: INICIO_RAPIDO.md (Sección: Crear cuenta)
│
├─ ¿Nunca subí código a GitHub?
│  └─ → Lee: INICIO_RAPIDO.md (Sección: Publicar en GitHub Pages)
│
├─ ¿Ya subí código pero no funciona?
│  └─ → Lee: FAQ.md (Busca tu error)
│
├─ ¿Funciona localmente pero no en GitHub?
│  └─ → Lee: FAQ.md ("Mi sitio no se ve en GitHub Pages")
│
├─ ¿Tengo error de "No veo mis datos"?
│  └─ → Lee: FAQ.md ("No veo mis datos de Baserow")
│
├─ ¿Quiero cambiar colores/estilos?
│  └─ → Lee: README.md (Sección: Personalización)
│     → Edita: src/scss/estilos.scss
│
├─ ¿Quiero agregar una segunda tabla?
│  └─ → Lee: EJEMPLOS_AVANZADOS.js (Ejemplo 1)
│
├─ ¿Quiero agregar búsqueda?
│  └─ → Lee: EJEMPLOS_AVANZADOS.js (Ejemplo 3)
│
├─ ¿Quiero agregar formulario?
│  └─ → Lee: EJEMPLOS_AVANZADOS.js (Ejemplo 2)
│
└─ ¿Soy docente?
   └─ → Lee: GUIA_DOCENTES.md
```

---

### Archivos por importancia

```
🔴 CRÍTICOS (si no funcionan, sitio no carga)
├─ index.html
├─ src/programa.js
├─ src/baserow.js
└─ vite.config.js

🟡 IMPORTANTES (afecta cómo se ve)
├─ src/config.js
├─ src/scss/estilos.scss
└─ src/componentes.js

🟢 OPCIONALES (expansión)
├─ src/ambiente.d.ts
├─ estaticos/
├─ EJEMPLOS_AVANZADOS.js
└─ .env (si quieres mayor seguridad)

⚪ NO TOCAR
├─ package.json
├─ tsconfig.json
├─ postcss.config.cjs
├─ yarn.lock
└─ .gitignore (salvo agregar archivos)
```

---

### Ciclo de desarrollo

```
1. PROGRAMACIÓN
   ├─ Editar archivos (config, componentes, estilos)
   └─ Ver cambios en tiempo real con `npm run dev`

2. TESTING
   ├─ Abrir http://localhost:3000
   ├─ Abrir consola (F12)
   └─ Revisar que todo funciona

3. BASEROW
   ├─ Agregar/editar datos
   ├─ Refrescar navegador
   └─ Ver cambios automáticos

4. PUBLICACIÓN
   ├─ Ejecutar `npm run build`
   ├─ Commitear cambios
   ├─ Hacer git push
   └─ Esperar 2-3 min en GitHub Pages

5. VERIFICAR
   └─ Ver sitio en https://usuario.github.io/repo
```

---

### Conceptos clave

```
TOKEN DE BASEROW
└─ Contraseña que identifica tu cuenta ante la API
   → No la compartas
   → Guárdala en src/config.js
   → Si la pierdes, genera una nueva

TABLA EN BASEROW
└─ Es como un Excel en la nube
   → Tiene columnas (campos)
   → Tiene filas (registros/datos)
   → Desde el sitio se leen estos datos

API DE BASEROW
└─ El "puente" entre tu sitio y los datos
   → Tu sitio hace preguntas a la API
   → "¿Me das los datos de la tabla 12345?"
   → La API responde con los datos

GITHUB PAGES
└─ Servicio donde se publica tu sitio
   → Es gratis
   → Los archivos en `dist/` se publican
   → Tarda 2-3 min en actualizar

COMPONENTES
└─ Funciones que crean HTML
   → crearTarjetaProyecto()
   → crearListaArticulos()
   → etc
   → Las llamas desde programa.js
```

---

### Cambios respecto al original

```
ANTES (TypeScript)          AHORA (JavaScript)
─────────────────          ──────────────────
Complejo para novatos       Simple y claro ✅
Muchas reglas               Flexible ✅
Errores de compilación      Menos errores ✅
.ts en src/                 .js en src/ ✅
TypeScript strict           JavaScript puro ✅
Sin Baserow                 Con Baserow ✅
Sin documentación           Muy documentado ✅
Para proyectos grandes      Para aprender y crecer ✅
```

---

### Checklist para empezar

- [ ] Leí COMIENZA_AQUI.md (este archivo)
- [ ] Leí INICIO_RAPIDO.md
- [ ] Tengo cuenta Baserow
- [ ] Tengo tabla con datos en Baserow
- [ ] Obtuve mi token de Baserow
- [ ] Tengo cuenta GitHub
- [ ] Node.js instalado
- [ ] Edité src/config.js con mis datos
- [ ] Ejecuté `npm install`
- [ ] Ejecuté `npm run dev` y funciona
- [ ] Personalicé estilos
- [ ] Cré repositorio en GitHub
- [ ] Ejecuté `npm run build`
- [ ] Hice git push
- [ ] Configuré GitHub Pages
- [ ] Mi sitio está en línea 🎉

---

**¿Listo? Abre [INICIO_RAPIDO.md](INICIO_RAPIDO.md) y comienza tu proyecto.**
