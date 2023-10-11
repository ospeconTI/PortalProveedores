/** @format */

import {
    BUSQUEDA_ORDENES,
    BUSQUEDA_ORDENES_SUCCESS,
    BUSQUEDA_ORDENES_ERROR
} from "./actions";

const initialState = {
    entities: null,
    timeStamp: null,
    errorTimeStamp: null

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
    }
    return newState;
};
