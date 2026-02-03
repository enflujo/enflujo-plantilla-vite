## 🚀 BIENVENIDO - Por dónde empezar

Hola! 👋 Esta plantilla te permite crear un sitio web dinámico conectado a Baserow sin necesidad de un servidor.

### 📖 Guías disponibles (elige la tuya)

#### 🟢 **Soy completamente principiante**

→ Lee: **[INICIO_RAPIDO.md](INICIO_RAPIDO.md)**

- Paso a paso desde cero
- Configurar Baserow
- Publicar en GitHub Pages
- Tiempo: ~1 hora

#### 🟡 **Ya tengo experiencia con Git/GitHub**

→ Lee: **[README.md](README.md)**

- Documentación completa
- Todas las características
- Tips de personalización
- Troubleshooting

#### 🔴 **Tengo dudas específicas**

→ Lee: **[FAQ.md](FAQ.md)**

- Preguntas frecuentes
- Problemas y soluciones
- Tips avanzados

#### 👨‍🏫 **Soy docente usando esto en clase**

→ Lee: **[GUIA_DOCENTES.md](GUIA_DOCENTES.md)**

- Cómo planificar la clase
- Rúbrica de evaluación
- Troubleshooting para docentes
- Proyectos sugeridos

#### 💎 **Ya funciona, quiero expandir**

→ Lee: **[EJEMPLOS_AVANZADOS.js](EJEMPLOS_AVANZADOS.js)**

- Código listo para copiar
- Segunda tabla
- Búsqueda y filtros
- Formularios
- Y mucho más

---

### ⚡ Inicio RÁPIDO (5 minutos)

1. **Clonar/descargar esta plantilla**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. **Instalar dependencias**

   ```bash
   yarn install
   ```

3. **Configurar con tus datos**
   - Abre `src/config.js`
   - Llena: `token`, `idBaseDatos`, `TABLA_PROYECTOS.id`
   - Verifica nombres de campos

4. **Probar localmente**

   ```bash
   yarn dev
   ```

   - Abre http://localhost:3000
   - ¡Deberías ver tus datos!

5. **Publicar**
   ```bash
   npm run build
   git add .
   git commit -m "Deploy"
   git push
   ```

---

### 📁 Estructura de archivos (qué tocar)

```
⭐⭐⭐ PRIMERO
  src/config.js              Tu configuración de Baserow
  index.html                 Estructura y textos del sitio

⭐⭐ DESPUÉS
  src/scss/estilos.scss      Colores, fuentes, diseño
  src/programa.js            Lógica (cuando entiendas cómo funciona)

⭐ OPCIONAL
  src/componentes.js         Crear nuevos componentes
  estaticos/                 Guardar imágenes aquí
  vite.config.js            Solo si publicas en subruta
```

---

### 🎯 Próximos pasos

- [ ] Leer INICIO_RAPIDO.md (15 min)
- [ ] Crear cuenta Baserow (5 min)
- [ ] Crear tabla con datos (10 min)
- [ ] Configurar plantilla (5 min)
- [ ] Probar `npm run dev` (5 min)
- [ ] Personalizar estilos (30 min)
- [ ] Crear repositorio GitHub (10 min)
- [ ] Publicar en GitHub Pages (10 min)
- [ ] ¡Compartir tu sitio! 🎉

---

### ✨ Características de esta plantilla

✅ **Sin backend** - Todo con Baserow
✅ **Completamente gratis** - Baserow + GitHub Pages
✅ **Fácil para principiantes** - JavaScript puro, sin TypeScript
✅ **Escalable** - Agrega tablas, campos, lógica
✅ **Responsive** - Se ve bien en móvil
✅ **Bien documentado** - Muy comentado

---

### 🆘 Necesito ayuda

1. **Primer error que vea** → Abre consola (F12) y lee el error rojo
2. **No encuentro mi respuesta** → Mira [FAQ.md](FAQ.md)
3. **Es un problema de configuración** → Revisa [INICIO_RAPIDO.md](INICIO_RAPIDO.md)
4. **Error técnico** → Busca en consola o en las guías

---

### 🤔 Preguntas más frecuentes

**"¿Necesito pagar por algo?"**
No. Todo es gratis (Baserow + GitHub Pages).

**"¿Cuánto tarda en aprender?"**

- Funcional en 1 hora
- Cómodo con personalizaciones en 4-5 horas
- Avanzado en 20+ horas

**"¿Puedo compartir mi sitio?"**
Sí. Una vez publicado en GitHub Pages, es un URL público.

**"¿Dónde guardo mis datos?"**
En Baserow. Si cambias algo allí, aparece al refrescar el sitio.

**"¿Puedo hacer formulario de contacto?"**
Sí. Mira [EJEMPLOS_AVANZADOS.js](EJEMPLOS_AVANZADOS.js) - Ejemplo 2.

---

### 🎓 Aprenderás

- 📦 APIs REST (Baserow)
- 🔐 Autenticación con tokens
- 💾 Cómo conectar base de datos a un sitio
- 🚀 Publicar en GitHub Pages
- 🎨 SCSS y diseño responsive
- ⚛️ JavaScript moderno (ES6+)
- 🛠️ Build tools (Vite)
- 📱 Desarrollo de sitios reales

---

**¡Adelante, tu sitio te espera! 🚀**

Cualquier duda, consulta las guías o la consola del navegador (F12).
