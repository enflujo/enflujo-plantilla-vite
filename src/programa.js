import './scss/estilos.scss';
import { SITIO, TABLA_PROYECTOS, AVANZADO } from './config.js';
import { obtenerRegistrosTabla } from './baserow.js';
import { crearTarjetaProyecto } from './componentes.js';

let cargandoProyectos = false;

// =====================================================
// INICIALIZACIÓN DEL SITIO
// =====================================================

console.log('🚀 Iniciando sitio:', SITIO.titulo);

// Actualizar la información del sitio en el HTML
actualizarMetadatos();

// Cargar y mostrar los datos de Baserow
cargarYMostrarProyectos();

// =====================================================
// FUNCIONES
// =====================================================

/**
 * Actualiza los metadatos del sitio (título, descripción, etc.)
 * Esto es importante para SEO y redes sociales
 */
function actualizarMetadatos() {
  // Actualizar el título en la pestaña del navegador
  document.title = SITIO.titulo;

  // Actualizar la descripción
  let metaDescripcion = document.querySelector('meta[name="description"]');
  if (metaDescripcion) {
    metaDescripcion.setAttribute('content', SITIO.descripcion);
  }

  // Actualizar OpenGraph (para redes sociales)
  document.querySelectorAll('meta[property^="og:"]').forEach((meta) => {
    const propiedad = meta.getAttribute('property');

    if (propiedad === 'og:title') {
      meta.setAttribute('content', SITIO.titulo);
    } else if (propiedad === 'og:description') {
      meta.setAttribute('content', SITIO.descripcion);
    } else if (propiedad === 'og:url') {
      meta.setAttribute('content', SITIO.urlSitio);
    }
  });

  if (AVANZADO.debug) {
    console.log('✅ Metadatos actualizados');
  }
}

/**
 * Carga los proyectos de Baserow y los muestra en la página
 */
async function cargarYMostrarProyectos() {
  if (cargandoProyectos) {
    return;
  }

  cargandoProyectos = true;

  // Mostrar un indicador de que estamos cargando
  const contenedor = document.querySelector('main') || document.body;

  // Limpiar resultados previos (si existen)
  contenedor.querySelectorAll('.proyectos-grid, .mensaje-vacio, .cargando').forEach((nodo) => nodo.remove());

  const mensajeCarga = document.createElement('p');
  mensajeCarga.className = 'cargando';
  mensajeCarga.textContent = '⏳ Cargando proyectos...';
  contenedor.appendChild(mensajeCarga);

  try {
    const proyectos = AVANZADO.modoEstatico ? await obtenerProyectosEstaticos() : await obtenerProyectosConCache();

    // Remover el mensaje de carga
    mensajeCarga.remove();

    if (proyectos.length === 0) {
      console.warn('⚠️ No se encontraron proyectos');
      const mensajeVacio = document.createElement('p');
      mensajeVacio.className = 'mensaje-vacio';
      mensajeVacio.textContent = 'No hay proyectos para mostrar aún.';
      contenedor.appendChild(mensajeVacio);
      return;
    }

    // Crear un contenedor para las tarjetas
    const seccionProyectos = document.createElement('section');
    seccionProyectos.className = 'proyectos-grid';

    // Crear una tarjeta para cada proyecto
    proyectos.forEach((proyecto) => {
      const tarjeta = crearTarjetaProyecto({
        titulo: proyecto[TABLA_PROYECTOS.campos.titulo],
        descripcion: proyecto[TABLA_PROYECTOS.campos.descripcion],
        imagen: proyecto[TABLA_PROYECTOS.campos.imagen],
        enlace: proyecto[TABLA_PROYECTOS.campos.enlace],
      });

      seccionProyectos.appendChild(tarjeta);
    });

    // Agregar las tarjetas a la página
    contenedor.appendChild(seccionProyectos);

    if (AVANZADO.debug) {
      console.log(`✅ Se mostraron ${proyectos.length} proyectos`);
    }
  } catch (error) {
    mensajeCarga.remove();
    console.error('❌ Error al cargar proyectos:', error);
    const mensajeError = document.createElement('p');
    mensajeError.className = 'mensaje-vacio';
    mensajeError.textContent = 'Ocurrió un error al cargar los proyectos.';
    contenedor.appendChild(mensajeError);
  } finally {
    cargandoProyectos = false;
  }
}

function obtenerCacheKey() {
  return `baserow_cache_${TABLA_PROYECTOS.id}`;
}

async function obtenerProyectosConCache() {
  if (!AVANZADO.cacheHabilitado) {
    return obtenerRegistrosTabla(TABLA_PROYECTOS.id);
  }

  const cacheKey = obtenerCacheKey();
  const cacheRaw = localStorage.getItem(cacheKey);

  if (cacheRaw) {
    try {
      const cache = JSON.parse(cacheRaw);
      const ttl = (AVANZADO.cacheTTL || 0) * 1000;
      if (ttl > 0 && Date.now() - cache.timestamp < ttl) {
        if (AVANZADO.debug) {
          console.log('✅ Usando caché local');
        }
        return cache.data || [];
      }
    } catch (error) {
      console.warn('⚠️ Caché corrupto, se volverá a cargar.', error);
    }
  }

  const datos = await obtenerRegistrosTabla(TABLA_PROYECTOS.id);
  localStorage.setItem(
    cacheKey,
    JSON.stringify({
      timestamp: Date.now(),
      data: datos,
    })
  );
  return datos;
}

async function obtenerProyectosEstaticos() {
  const respuesta = await fetch(AVANZADO.rutaEstatico, { cache: 'no-store' });
  const datos = await respuesta.json();
  if (Array.isArray(datos)) {
    return datos;
  }
  return datos.results || [];
}

// Recargar los datos periódicamente si está configurado
if (AVANZADO.tiempoRecarga > 0) {
  setInterval(cargarYMostrarProyectos, AVANZADO.tiempoRecarga * 1000);
}
