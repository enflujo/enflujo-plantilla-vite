/**
 * MÓDULO DE CONEXIÓN CON BASEROW
 *
 * Este módulo se encarga de:
 * - Conectar con la API de Baserow
 * - Obtener los datos de tus tablas
 * - Manejar errores de conexión
 *
 * No necesitas modificar este archivo a menos que hagas cambios avanzados.
 */

import axios from 'axios';
import { BASEROW, AVANZADO } from './config.js';

// Crear una instancia de axios configurada para Baserow
const api = axios.create({
  baseURL: BASEROW.urlBaserow,
  headers: {
    Authorization: `Token ${BASEROW.token}`,
  },
});

/**
 * Obtiene todos los registros de una tabla en Baserow
 *
 * @param {number} idTabla - El ID de la tabla en Baserow
 * @returns {Promise<Array>} Un array con todos los registros de la tabla
 */
export async function obtenerRegistrosTabla(idTabla) {
  try {
    const resultados = [];
    let page = 1;
    let haySiguiente = true;
    const size = AVANZADO.tamanoPagina || 100;

    while (haySiguiente) {
      const respuesta = await api.get(`/api/database/rows/table/${idTabla}/`, {
        params: { user_field_names: true, page, size },
      });

      resultados.push(...(respuesta.data.results || []));
      haySiguiente = Boolean(respuesta.data.next);
      page += 1;
    }

    if (AVANZADO.debug) {
      console.log(`Registros obtenidos de tabla ${idTabla}:`, {
        total: resultados.length,
        paginaSize: size,
      });
    }

    return resultados;
  } catch (error) {
    console.error(`Error al obtener datos de la tabla ${idTabla}:`, error.message);

    // Si el error es de autenticación, mostrar un mensaje más específico
    if (error.response?.status === 401) {
      console.error('❌ Error de autenticación. Verifica tu token de Baserow en config.js');
    }

    // Si el error es porque no existe la tabla
    if (error.response?.status === 404) {
      console.error('❌ Error: No se encontró la tabla. Verifica el ID de la tabla en config.js');
    }

    return [];
  }
}

/**
 * Obtiene un registro específico por su ID
 *
 * @param {number} idTabla - El ID de la tabla en Baserow
 * @param {number} idRegistro - El ID del registro que quieres obtener
 * @returns {Promise<Object>} El registro solicitado
 */
export async function obtenerRegistro(idTabla, idRegistro) {
  try {
    const respuesta = await api.get(`/api/database/rows/table/${idTabla}/${idRegistro}/`, {
      params: { user_field_names: true },
    });
    return respuesta.data;
  } catch (error) {
    console.error(`Error al obtener registro ${idRegistro}:`, error.message);
    return null;
  }
}

/**
 * Crea un nuevo registro en una tabla
 *
 * @param {number} idTabla - El ID de la tabla en Baserow
 * @param {Object} datos - Los datos del nuevo registro
 * @returns {Promise<Object>} El registro creado
 */
export async function crearRegistro(idTabla, datos) {
  try {
    const respuesta = await api.post(`/api/database/rows/table/${idTabla}/`, datos);
    console.log('✅ Registro creado exitosamente');
    return respuesta.data;
  } catch (error) {
    console.error('Error al crear registro:', error.message);
    return null;
  }
}

/**
 * Actualiza un registro existente
 *
 * @param {number} idTabla - El ID de la tabla en Baserow
 * @param {number} idRegistro - El ID del registro a actualizar
 * @param {Object} datos - Los nuevos datos
 * @returns {Promise<Object>} El registro actualizado
 */
export async function actualizarRegistro(idTabla, idRegistro, datos) {
  try {
    const respuesta = await api.patch(`/api/database/rows/table/${idTabla}/${idRegistro}/`, datos);
    console.log('✅ Registro actualizado exitosamente');
    return respuesta.data;
  } catch (error) {
    console.error('Error al actualizar registro:', error.message);
    return null;
  }
}

/**
 * Elimina un registro
 *
 * @param {number} idTabla - El ID de la tabla en Baserow
 * @param {number} idRegistro - El ID del registro a eliminar
 * @returns {Promise<boolean>} true si se eliminó exitosamente
 */
export async function eliminarRegistro(idTabla, idRegistro) {
  try {
    await api.delete(`/api/database/rows/table/${idTabla}/${idRegistro}/`);
    console.log('✅ Registro eliminado exitosamente');
    return true;
  } catch (error) {
    console.error('Error al eliminar registro:', error.message);
    return false;
  }
}
