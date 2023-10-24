/** @format */

export const BUSQUEDA_ORDENES = "[busquedaOrdenCompra] busqueda";
export const BUSQUEDA_ORDENES_SUCCESS = "[busquedaOrdenCompra] busqueda success";
export const BUSQUEDA_ORDENES_ERROR = "[BusquedaordenCompra] busqueda error";
export const FILTRO_ORDENES = "[BusquedaordenCompra] busqueda filtro";

export const busquedaGrilla = () => ({
    type: BUSQUEDA_ORDENES,
});
export const filtro = (campo,valor) => ({
    type: FILTRO_ORDENES, campo:campo, valor:valor,
});
