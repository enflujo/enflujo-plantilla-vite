/**
 * EJEMPLOS AVANZADOS
 * 
 * Este archivo contiene ejemplos más complejos para expandir tu sitio.
 * Copia y adapta el código que necesites.
 */

// =====================================================
// EJEMPLO 1: Agregar una segunda tabla (Artículos)
// =====================================================

// En src/config.js, agrega:
/*
export const TABLA_ARTICULOS = {
  id: 999999,  // Tu ID de tabla de artículos en Baserow
  campos: {
    titulo: 'Título',
    contenido: 'Contenido',
    autor: 'Autor',
    fecha: 'Publicado',
    imagen: 'Imagen portada',
  },
};
*/

// En src/programa.js, agrega al final de la función cargarYMostrarProyectos():
/*
import { TABLA_ARTICULOS } from './config.js';
import { crearListaArticulos } from './componentes.js';

async function cargarArticulos() {
  const articulos = await obtenerRegistrosTabla(TABLA_ARTICULOS.id);
  
  if (articulos.length === 0) {
    return;
  }
  
  const seccionArticulos = document.createElement('section');
  seccionArticulos.className = 'articulos-seccion';
  seccionArticulos.innerHTML = '<h2>Últimos Artículos</h2>';
  
  const listaArticulos = crearListaArticulos(articulos);
  seccionArticulos.appendChild(listaArticulos);
  
  document.querySelector('main').appendChild(seccionArticulos);
}

cargarArticulos();
*/

// =====================================================
// EJEMPLO 2: Agregar un formulario de contacto
// =====================================================

/*
function crearFormularioContacto() {
  const formulario = document.createElement('form');
  formulario.className = 'formulario-contacto';
  
  formulario.innerHTML = `
    <h2>Contáctame</h2>
    <input type="text" placeholder="Tu nombre" required>
    <input type="email" placeholder="Tu correo" required>
    <textarea placeholder="Tu mensaje" rows="5" required></textarea>
    <button type="submit">Enviar</button>
  `;
  
  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = formulario.querySelector('input[type="text"]').value;
    const email = formulario.querySelector('input[type="email"]').value;
    const mensaje = formulario.querySelector('textarea').value;
    
    // Guardar en Baserow
    await crearRegistro(TABLA_CONTACTOS.id, {
      'Nombre': nombre,
      'Email': email,
      'Mensaje': mensaje,
      'Fecha': new Date().toISOString(),
    });
    
    alert('¡Gracias por tu mensaje!');
    formulario.reset();
  });
  
  return formulario;
}

// Agregar al HTML:
// document.querySelector('main').appendChild(crearFormularioContacto());
*/

// =====================================================
// EJEMPLO 3: Filtrar y buscar proyectos
// =====================================================

/*
function crearBuscador() {
  const buscador = document.createElement('div');
  buscador.className = 'buscador';
  
  buscador.innerHTML = `
    <input 
      type="text" 
      placeholder="Buscar proyectos..." 
      class="input-buscar"
    >
  `;
  
  const input = buscador.querySelector('input');
  
  input.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    const tarjetas = document.querySelectorAll('.tarjeta-proyecto');
    
    tarjetas.forEach((tarjeta) => {
      const texto = tarjeta.textContent.toLowerCase();
      if (texto.includes(termino)) {
        tarjeta.style.display = '';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
  
  return buscador;
}

// Agregar al HTML:
// document.querySelector('main').prepend(crearBuscador());
*/

// =====================================================
// EJEMPLO 4: Paginación
// =====================================================

/*
async function cargarProyectosConPaginacion(numeroPagina = 1) {
  const porPagina = 6;
  
  // En Baserow, obtener con filtros
  const url = `https://api.baserow.io/database/tables/${TABLA_PROYECTOS.id}/rows/?`;
  
  const proyectos = await obtenerRegistrosTabla(TABLA_PROYECTOS.id);
  
  // Dividir en páginas
  const inicio = (numeroPagina - 1) * porPagina;
  const fin = inicio + porPagina;
  const proyectosPagina = proyectos.slice(inicio, fin);
  
  const totalPaginas = Math.ceil(proyectos.length / porPagina);
  
  // Mostrar proyectos
  const contenedor = document.querySelector('.proyectos-grid');
  contenedor.innerHTML = '';
  
  proyectosPagina.forEach((proyecto) => {
    const tarjeta = crearTarjetaProyecto({
      titulo: proyecto[TABLA_PROYECTOS.campos.titulo],
      descripcion: proyecto[TABLA_PROYECTOS.campos.descripcion],
      imagen: proyecto[TABLA_PROYECTOS.campos.imagen],
      enlace: proyecto[TABLA_PROYECTOS.campos.enlace],
    });
    contenedor.appendChild(tarjeta);
  });
  
  // Crear botones de paginación
  const paginacion = document.createElement('div');
  paginacion.className = 'paginacion';
  
  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement('button');
    boton.textContent = i;
    if (i === numeroPagina) boton.classList.add('activo');
    
    boton.addEventListener('click', () => {
      cargarProyectosConPaginacion(i);
      window.scrollTo(0, 0);
    });
    
    paginacion.appendChild(boton);
  }
  
  document.querySelector('main').appendChild(paginacion);
}
*/

// =====================================================
// EJEMPLO 5: Ordenar proyectos por fecha
// =====================================================

/*
function ordenarPorFecha(proyectos, descendente = true) {
  return proyectos.sort((a, b) => {
    const fechaA = new Date(a[TABLA_PROYECTOS.campos.fecha]);
    const fechaB = new Date(b[TABLA_PROYECTOS.campos.fecha]);
    
    return descendente ? fechaB - fechaA : fechaA - fechaB;
  });
}

// Uso:
// const proyectosOrdenados = ordenarPorFecha(proyectos);
*/

// =====================================================
// EJEMPLO 6: Cargar imagen desde archivo local
// =====================================================

/*
function crearCargadorImagenes() {
  const div = document.createElement('div');
  
  div.innerHTML = `
    <input type="file" accept="image/*" id="cargador">
    <button id="btn-cargar">Cargar imagen</button>
  `;
  
  const input = div.querySelector('input');
  const btn = div.querySelector('button');
  
  btn.addEventListener('click', () => {
    if (input.files.length === 0) return;
    
    const archivo = input.files[0];
    const lector = new FileReader();
    
    lector.onload = (e) => {
      const imagenBase64 = e.target.result;
      // Ahora puedes guardar esta imagen en Baserow
      console.log('Imagen lista:', imagenBase64);
    };
    
    lector.readAsDataURL(archivo);
  });
  
  return div;
}
*/

// =====================================================
// EJEMPLO 7: Galería con lightbox
// =====================================================

/*
function crearGaleriaConLightbox(imagenes) {
  const galeria = document.createElement('div');
  galeria.className = 'galeria-lightbox';
  
  imagenes.forEach((img) => {
    const figura = document.createElement('figure');
    const img_el = document.createElement('img');
    img_el.src = img.url;
    img_el.alt = img.titulo;
    
    img_el.addEventListener('click', () => {
      abrirLightbox(img);
    });
    
    figura.appendChild(img_el);
    galeria.appendChild(figura);
  });
  
  return galeria;
}

function abrirLightbox(imagen) {
  const modal = document.createElement('div');
  modal.className = 'modal-lightbox';
  modal.innerHTML = `
    <img src="${imagen.url}" alt="${imagen.titulo}">
    <button class="cerrar">×</button>
  `;
  
  document.body.appendChild(modal);
  
  modal.querySelector('.cerrar').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// CSS para el lightbox:
/*
.modal-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-lightbox img {
  max-width: 90%;
  max-height: 90%;
}

.cerrar {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 28px;
  font-weight: bold;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
*/

// =====================================================
// EJEMPLO 8: Mostrar más detalles de un proyecto al hacer clic
// =====================================================

/*
function crearTarjetaConDetalle(proyecto) {
  const tarjeta = crearTarjetaProyecto(proyecto);
  
  tarjeta.addEventListener('click', () => {
    mostrarDetalle(proyecto);
  });
  
  return tarjeta;
}

function mostrarDetalle(proyecto) {
  const modal = document.createElement('div');
  modal.className = 'modal-detalle';
  
  modal.innerHTML = `
    <div class="modal-contenido">
      <button class="cerrar">×</button>
      <h2>${proyecto[TABLA_PROYECTOS.campos.titulo]}</h2>
      <p>${proyecto[TABLA_PROYECTOS.campos.descripcion]}</p>
      ${proyecto[TABLA_PROYECTOS.campos.enlace] ? 
        `<a href="${proyecto[TABLA_PROYECTOS.campos.enlace]}" class="btn-visitar">
          Visitar proyecto
        </a>` : 
        ''}
    </div>
  `;
  
  document.body.appendChild(modal);
  
  modal.querySelector('.cerrar').addEventListener('click', () => {
    modal.remove();
  });
}
*/

// =====================================================
// EJEMPLO 9: Guardar en localStorage para trabajar offline
// =====================================================

/*
async function cargarProyectosConCache() {
  try {
    const proyectos = await obtenerRegistrosTabla(TABLA_PROYECTOS.id);
    
    // Guardar en localStorage
    localStorage.setItem('proyectos_cache', JSON.stringify(proyectos));
    localStorage.setItem('proyectos_cache_fecha', new Date().toISOString());
    
    return proyectos;
  } catch (error) {
    // Si hay error, usar datos en caché
    const cache = localStorage.getItem('proyectos_cache');
    if (cache) {
      console.log('Usando datos en caché');
      return JSON.parse(cache);
    }
    return [];
  }
}
*/

// =====================================================
// EJEMPLO 10: Componente de comentarios
// =====================================================

/*
function crearSeccionComentarios(idProyecto) {
  const div = document.createElement('div');
  div.className = 'comentarios';
  
  div.innerHTML = `
    <h3>Comentarios</h3>
    <form class="formulario-comentario">
      <input type="text" placeholder="Tu nombre" required>
      <textarea placeholder="Tu comentario" required></textarea>
      <button type="submit">Comentar</button>
    </form>
    <div class="lista-comentarios"></div>
  `;
  
  const form = div.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = form.querySelector('input').value;
    const comentario = form.querySelector('textarea').value;
    
    // Guardar en Baserow
    await crearRegistro(TABLA_COMENTARIOS.id, {
      'Proyecto': idProyecto,
      'Nombre': nombre,
      'Comentario': comentario,
      'Fecha': new Date().toISOString(),
    });
    
    form.reset();
    cargarComentarios(idProyecto);
  });
  
  async function cargarComentarios(id) {
    const comentarios = await obtenerRegistrosTabla(TABLA_COMENTARIOS.id);
    const lista = div.querySelector('.lista-comentarios');
    lista.innerHTML = '';
    
    comentarios
      .filter(c => c['Proyecto'] === id)
      .forEach(c => {
        const elemento = document.createElement('div');
        elemento.className = 'comentario';
        elemento.innerHTML = `
          <strong>${c['Nombre']}</strong>
          <p>${c['Comentario']}</p>
          <small>${new Date(c['Fecha']).toLocaleDateString()}</small>
        `;
        lista.appendChild(elemento);
      });
  }
  
  cargarComentarios(idProyecto);
  
  return div;
}
*/

// =====================================================
// EJEMPLO 11: Enviar datos a un servidor externo
// =====================================================

/*
async function guardarEnServidor(datos) {
  try {
    const respuesta = await fetch('https://tu-servidor.com/api/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
    
    if (respuesta.ok) {
      console.log('Datos guardados en el servidor');
      return true;
    }
  } catch (error) {
    console.error('Error al guardar:', error);
    return false;
  }
}
*/

// =====================================================
// EJEMPLO 12: Agregar animaciones al scroll
// =====================================================

/*
function agregarAnimacionesScroll() {
  const elementos = document.querySelectorAll('.tarjeta-proyecto');
  
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      }
    });
  });
  
  elementos.forEach((el) => {
    observador.observe(el);
  });
}

// CSS:
/*
.tarjeta-proyecto {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.tarjeta-proyecto.visible {
  opacity: 1;
  transform: translateY(0);
}
*/
*/

console.log('Ejemplos cargados. Copia y adapta el código que necesites.');
