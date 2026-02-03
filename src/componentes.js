/**
 * MÓDULO DE COMPONENTES
 *
 * Este módulo contiene funciones para crear componentes HTML reutilizables.
 * Usa estas funciones para construir las diferentes partes de tu sitio.
 */

/**
 * Crea una tarjeta con información de un proyecto
 *
 * Uso:
 * const tarjeta = crearTarjetaProyecto({
 *   titulo: 'Mi Proyecto',
 *   descripcion: 'Una descripción breve',
 *   imagen: 'https://ejemplo.com/imagen.jpg',
 *   enlace: 'https://ejemplo.com'
 * });
 * document.body.appendChild(tarjeta);
 *
 * @param {Object} datos - Los datos de la tarjeta
 * @param {string} datos.titulo - El título del proyecto
 * @param {string} datos.descripcion - La descripción
 * @param {string} datos.imagen - URL de la imagen (opcional)
 * @param {string} datos.enlace - URL del enlace (opcional)
 * @returns {HTMLElement} Un elemento HTML listo para insertar
 */
export function crearTarjetaProyecto(datos) {
  const div = document.createElement('article');
  div.className = 'tarjeta-proyecto';

  let html = '<div class="tarjeta-contenido">';

  // Agregar imagen si existe
  if (datos.imagen) {
    html += `<img src="${datos.imagen}" alt="${datos.titulo}" class="tarjeta-imagen">`;
  }

  html += '<div class="tarjeta-texto">';
  html += `<h3 class="tarjeta-titulo">${datos.titulo}</h3>`;

  if (datos.descripcion) {
    html += `<p class="tarjeta-descripcion">${datos.descripcion}</p>`;
  }

  // Agregar enlace si existe
  if (datos.enlace) {
    html += `<a href="${datos.enlace}" class="tarjeta-enlace">Ver más →</a>`;
  }

  html += '</div></div>';

  div.innerHTML = html;
  return div;
}

/**
 * Crea una lista de artículos
 *
 * @param {Array} articulos - Array de artículos con {titulo, contenido, fecha}
 * @returns {HTMLElement} Un elemento HTML con la lista
 */
export function crearListaArticulos(articulos) {
  const div = document.createElement('section');
  div.className = 'lista-articulos';

  let html = '<div class="articulos-contenedor">';

  articulos.forEach((articulo) => {
    html += '<article class="articulo">';
    html += `<h2>${articulo.titulo}</h2>`;

    if (articulo.fecha) {
      html += `<time class="articulo-fecha">${articulo.fecha}</time>`;
    }

    if (articulo.imagen) {
      html += `<img src="${articulo.imagen}" alt="${articulo.titulo}" class="articulo-imagen">`;
    }

    html += `<div class="articulo-contenido">${articulo.contenido}</div>`;
    html += '</article>';
  });

  html += '</div>';

  div.innerHTML = html;
  return div;
}

/**
 * Crea un galería de imágenes
 *
 * @param {Array} imagenes - Array de {url, titulo, descripcion}
 * @returns {HTMLElement} Un elemento HTML con la galería
 */
export function crearGaleria(imagenes) {
  const div = document.createElement('section');
  div.className = 'galeria';

  let html = '<div class="galeria-grid">';

  imagenes.forEach((img) => {
    html += '<figure class="galeria-item">';
    html += `<img src="${img.url}" alt="${img.titulo}" loading="lazy">`;

    if (img.titulo || img.descripcion) {
      html += '<figcaption>';
      if (img.titulo) html += `<h3>${img.titulo}</h3>`;
      if (img.descripcion) html += `<p>${img.descripcion}</p>`;
      html += '</figcaption>';
    }

    html += '</figure>';
  });

  html += '</div>';

  div.innerHTML = html;
  return div;
}

/**
 * Crea un héroe (banner) al inicio de la página
 *
 * @param {Object} datos - {titulo, subtitulo, imagen, enlace, textoEnlace}
 * @returns {HTMLElement} Un elemento HTML del héroe
 */
export function crearHereo(datos) {
  const div = document.createElement('section');
  div.className = 'hereo';

  let html = '';

  if (datos.imagen) {
    html += `<img src="${datos.imagen}" alt="${datos.titulo}" class="hereo-fondo">`;
  }

  html += '<div class="hereo-contenido">';
  html += `<h1>${datos.titulo}</h1>`;

  if (datos.subtitulo) {
    html += `<p class="hereo-subtitulo">${datos.subtitulo}</p>`;
  }

  if (datos.enlace) {
    html += `<a href="${datos.enlace}" class="hereo-boton">${datos.textoEnlace || 'Explora'}</a>`;
  }

  html += '</div>';

  div.innerHTML = html;
  return div;
}

/**
 * Crea una sección con un título y contenido
 *
 * @param {string} titulo - El título de la sección
 * @param {string} contenido - El HTML o texto del contenido
 * @param {string} clase - Clase CSS adicional (opcional)
 * @returns {HTMLElement}
 */
export function crearSeccion(titulo, contenido, clase = '') {
  const div = document.createElement('section');
  div.className = `seccion ${clase}`;

  let html = `<h2>${titulo}</h2>`;
  html += `<div class="seccion-contenido">${contenido}</div>`;

  div.innerHTML = html;
  return div;
}
