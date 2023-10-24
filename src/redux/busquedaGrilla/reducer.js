/** @format */

import {
    BUSQUEDA_ORDENES,
    BUSQUEDA_ORDENES_SUCCESS,
    BUSQUEDA_ORDENES_ERROR,
    FILTRO_ORDENES
    
} from "./actions";

const initialState = {
    entities: null,
    timeStamp: null,
    errorTimeStamp: null,
    filtro: {},
    
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case BUSQUEDA_ORDENES:

            break;
        case BUSQUEDA_ORDENES_SUCCESS:
            newState.entities = action.payload.receive
            newState.timeStamp = new Date().getTime()

            break;
        case BUSQUEDA_ORDENES_ERROR:
            newState.errorTimeStamp = new Date().getTime()

            break;
        case FILTRO_ORDENES:
            newState.filtro.timeStamp = new Date().getTime()
            newState.filtro.campo = action.campo
            newState.filtro.valor = action.valor
    
    }
    return newState;
};
