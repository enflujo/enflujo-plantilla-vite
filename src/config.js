/**
 * CONFIGURACIÓN DEL PROYECTO
 *
 * Este archivo contiene todas las configuraciones que los estudiantes
 * necesitan personalizar para conectar su sitio con Baserow.
 *
 * No es necesario tocar otros archivos del proyecto si solo quieren cambiar
 * el contenido de sus datos.
 */

// =====================================================
// 1. INFORMACIÓN DEL SITIO
// =====================================================
// Reemplaza estos valores con la información de tu proyecto

export const SITIO = {
  // El nombre de tu sitio (aparecerá en el navegador y en Google)
  titulo: 'Mi Sitio con Baserow',

  // Una descripción breve del sitio
  descripcion: 'Un sitio creado con Baserow y GitHub Pages',

  // Tu nombre o nombre de la organización
  autor: 'Mi Nombre',

  // El URL donde estará tu sitio publicado
  // Si es en GitHub Pages: https://tuusuario.github.io/nombre-repositorio
  urlSitio: 'https://ejemplo.com',

  // Idioma del sitio (ISO 639-1)
  idioma: 'es',

  // País/región (ISO 3166-1)
  pais: 'CO',
};

// =====================================================
// 2. CONEXIÓN CON BASEROW
// =====================================================
// Configura aquí los datos de conexión a tu base de datos Baserow

export const BASEROW = {
  // El URL de tu instancia Baserow
  // Si usas Baserow Cloud (gratuito): https://api.baserow.io
  // Si tienes un servidor propio: https://tu-dominio.com
  urlBaserow: 'https://api.baserow.io',

  // Tu token de autenticación de Baserow
  // Cómo conseguirlo:
  // 1. Ve a https://baserow.io (o tu instancia)
  // 2. Inicia sesión con tu cuenta
  // 3. Ve a "Settings" (Configuración)
  // 4. En "Account" busca "API tokens"
  // 5. Crea un nuevo token (dale un nombre descriptivo)
  // 6. Copia el token aquí
  // Recomendado: usar una variable de entorno VITE_BASEROW_TOKEN
  token: import.meta.env.VITE_BASEROW_TOKEN || 'F9f9QIYJHx1ALf6USPuLtOeG7Ub9Cc3e',

  // El ID de tu base de datos Baserow
  // Cómo conseguirlo:
  // 1. Ve a tu base de datos en Baserow
  // 2. Mira la URL en el navegador: /database/[ID]/
  // 3. El [ID] es lo que necesitas aquí
  idBaseDatos: 364668,
};

// =====================================================
// 3. CONFIGURACIÓN DE TABLAS Y CAMPOS
// =====================================================
// Define aquí qué datos quieres mostrar en tu sitio

// Ejemplo: tabla de "Películas"
export const TABLA_PROYECTOS = {
  // El ID de la tabla en Baserow
  // Cómo conseguirlo: Ve a tu tabla, el URL es /database/[DB_ID]/table/[TABLE_ID]/
  id: 825354,

  // Los nombres de los campos en tu tabla
  // (deben coincidir exactamente con los nombres en Baserow)
  campos: {
    titulo: 'Título', // Campo que contiene el título del proyecto
    descripcion: 'Descripción', // Campo que contiene la descripción
    imagen: 'Imagen', // Campo que contiene la URL de la imagen
    enlace: 'Enlace', // Campo que contiene un enlace externo
    fecha: 'Fecha', // Campo que contiene la fecha
  },
};

// Ejemplo: tabla de "Articulos"
// Descomenta y modifica si quieres usar otra tabla
/*
export const TABLA_ARTICULOS = {
  id: 0,
  campos: {
    titulo: 'Título',
    contenido: 'Contenido',
    autor: 'Autor',
    fecha: 'Publicado el',
    imagen: 'Imagen portada',
  },
};
*/

// =====================================================
// 4. CONFIGURACIÓN AVANZADA (Opcional)
// =====================================================
// No necesitas cambiar esto si no lo entiendes

export const AVANZADO = {
  // Si tu sitio está en una subruta de GitHub Pages
  // Por ejemplo: https://tuusuario.github.io/mi-sitio
  // Cambia esto a: '/mi-sitio'
  basePath: '/',

  // Número de segundos antes de recargar los datos de Baserow
  // (para ver cambios en tiempo real, reduce este número)
  tiempoRecarga: 300, // 5 minutos

  // Mostrar logs en la consola del navegador (útil para debugging)
  debug: true,

  // -------------------------------
  // Paginación (Baserow)
  // -------------------------------
  // Cantidad de filas por página (máx. recomendado: 200)
  tamanoPagina: 100,

  // -------------------------------
  // Caché local (localStorage)
  // -------------------------------
  cacheHabilitado: true,
  // Tiempo de vida del caché en segundos
  cacheTTL: 300,

  // -------------------------------
  // Modo estático (sin API)
  // -------------------------------
  // Si es true, se cargan datos desde un JSON local
  modoEstatico: false,
  // Ruta del archivo JSON (dentro de /estaticos)
  rutaEstatico: '/estaticos/datos.json',
};
