## GUÍA PARA DOCENTES - Cómo usar esta plantilla

Esta plantilla está diseñada para que estudiantes creen sitios web dinámicos sin necesidad de servidor backend.

### ✅ Ventajas de esta plantilla

- **Sin complejidad de backend**: Todo funciona con APIs públicas
- **Completamente gratuito**: Baserow + GitHub Pages = $0
- **Escalable**: Los estudiantes pueden empezar simple y crecer
- **Educativo**: Aprenden JavaScript, APIs, databases y deployment
- **Real**: Los estudiantes publican sitios reales

### 📋 Requisitos previos para los estudiantes

- Navegador web moderno (Chrome, Firefox, Edge)
- Cuenta de GitHub (gratuita)
- Contador de Baserow (gratuita)
- Conocimientos básicos de JavaScript (ES6+)
- Git instalado en la computadora
- Node.js instalado (npm viene incluido)

### 🎓 Flujo de aprendizaje recomendado

#### Semana 1: Fundamentos

1. **Día 1**: Crear cuenta Baserow y entender bases de datos
   - Crear tabla con 5-10 registros
   - Entender campos y tipos de datos
2. **Día 2**: Entender API y autenticación
   - Generar token API
   - Leer documentación Baserow API
3. **Día 3**: Configurar la plantilla localmente
   - Clonar repositorio
   - Instalar dependencias (`npm install`)
   - Llenar `config.js` con sus credenciales
4. **Día 4-5**: Probar y entender el flujo
   - Ejecutar `npm run dev`
   - Ver sus datos en el navegador
   - Experimentar con `programa.js`

#### Semana 2: Personalización

1. **Día 1**: Cambiar estilos
   - Editar colores en `estilos.scss`
   - Cambiar fuentes y espacios
   - Hacer responsive
2. **Día 2**: Modificar HTML
   - Cambiar estructura en `index.html`
   - Agregar secciones
   - Editar textos
3. **Día 3-4**: JavaScript básico
   - Leer `programa.js` línea por línea
   - Entender cómo obtiene datos
   - Hacer cambios simples
4. **Día 5**: Usar componentes
   - Importar funciones de `componentes.js`
   - Crear tarjetas personalizadas
   - Experimentar con datos

#### Semana 3: Publicación

1. **Día 1**: Git y GitHub
   - Crear repositorio en GitHub
   - Aprender conceptos: commit, push, branch
2. **Día 2**: GitHub Pages
   - Configurar Pages en GitHub
   - Entender base path y subrutas
3. **Día 3-4**: Deployment
   - Hacer `npm run build`
   - Subir cambios a GitHub
   - Verificar que el sitio funciona
4. **Día 5**: Iteración
   - Hacer cambios en Baserow
   - Ver cambios en vivo
   - Entender flujo CI/CD

#### Semana 4: Expansión

1. Agregar segunda tabla
2. Crear formulario de contacto
3. Agregar búsqueda/filtros
4. Implementar paginación
5. Mejorar UX/UI

### 💡 Ejercicios sugeridos

#### Nivel 1: Principiante

- [ ] Cambiar título y descripción
- [ ] Modificar colores principales
- [ ] Cambiar nombres de secciones
- [ ] Agregar más datos a Baserow
- [ ] Cambiar orden de elementos

#### Nivel 2: Intermedio

- [ ] Agregar segunda tabla
- [ ] Implementar búsqueda simple
- [ ] Crear sección de contacto
- [ ] Mejorar responsive design
- [ ] Agregar animaciones CSS

#### Nivel 3: Avanzado

- [ ] Crear formulario que guarda en Baserow
- [ ] Implementar paginación
- [ ] Agregar filtros complejos
- [ ] Crear galería interactiva
- [ ] Usar localStorage para caché

### 📊 Rúbrica de evaluación sugerida

#### Criterios técnicos (40%)

- [ ] Configuración correcta de Baserow (10%)
- [ ] Datos se cargan y muestran (10%)
- [ ] Sitio publicado en GitHub Pages (10%)
- [ ] Código limpio y comentado (10%)

#### Diseño y UX (30%)

- [ ] Diseño profesional (10%)
- [ ] Responsive en móviles (10%)
- [ ] Navegación clara (10%)

#### Contenido (20%)

- [ ] Datos relevantes en Baserow (10%)
- [ ] Textos claros y bien organizados (10%)

#### Expansión y creatividad (10%)

- [ ] Características adicionales (10%)

### 🔧 Troubleshooting en clase

**Problema: "Mi token no funciona"**

- Solución: Pedir al estudiante que genere uno nuevo
- Verificar que está completo (sin espacios al inicio/final)

**Problema: "No veo mis datos"**

- Solución: Revisar consola (F12) para ver errores específicos
- Verificar que los IDs de tabla son correctos
- Asegurar que los nombres de campos coinciden exactamente

**Problema: "Mi sitio no está en GitHub Pages"**

- Solución: Verificar que hizo `npm run build`
- Comprobar que está en rama `main`
- Esperar 3-5 minutos y refrescar

**Problema: "Perdí mi token"**

- Solución: Simplemente crear uno nuevo en Baserow
- No hay problema, es inmediato

### 🎯 Proyectos finales recomendados

#### Portafolio

- Tabla con proyectos completados
- Tabla con habilidades
- Formulario de contacto
- Sección de "Acerca de"

#### Blog

- Tabla de artículos
- Tabla de categorías
- Sistema de comentarios
- Búsqueda de posts

#### Tienda simple

- Tabla de productos
- Tabla de órdenes
- Tabla de reseñas
- Carrito (localStorage)

#### Galería de arte

- Tabla de obras
- Tabla de artistas
- Galería interactiva
- Sistema de filtros

### 📚 Recursos para compartir con estudiantes

Dentro de este repositorio hay:

- `INICIO_RAPIDO.md` - Tutorial paso a paso
- `README.md` - Documentación completa
- `FAQ.md` - Respuestas a preguntas frecuentes
- `EJEMPLOS_AVANZADOS.js` - Código listo para copiar

### ✨ Tips de enseñanza

1. **Personalizar según el nivel**
   - Principiantes: Solo cambiar config.js
   - Intermedios: Editar programa.js y estilos
   - Avanzados: Crear componentes nuevos

2. **Usar ejemplos reales**
   - Mostrar sitios hechos con esta plantilla
   - Motivar con proyectos interesantes

3. **Énfasis en conceptos**
   - No solo código, entender API REST
   - Explicar por qué Baserow + GitHub Pages
   - Cómo escala para proyectos reales

4. **Debugging como habilidad**
   - Enseñar a usar F12 (consola)
   - Leer mensajes de error
   - Buscar soluciones en internet

5. **Comunidad y colaboración**
   - Compartir sitios entre estudiantes
   - Code review entre pares
   - Mostrar iteraciones en clase

### 🚀 Pasos siguientes para graduados

Si los estudiantes quieren ir más allá:

- Aprender React o Vue.js
- Backend con Node.js/Express
- Base de datos SQL (PostgreSQL)
- Deployment en Vercel/Netlify
- PWA (Progressive Web Apps)

### 📞 Soporte

Si tienes dudas como docente:

1. Consulta la documentación completa
2. Prueba toda la plantilla antes de usar en clase
3. Ten credenciales de prueba listas para demostrar
4. Anticipa problemas comunes
5. Ten plan B (ejemplos ya compilados)

---

**¡Espero que esta plantilla sea útil para tu clase!** 🎓

Si necesitas adaptaciones o tienes sugerencias, comunícate.
