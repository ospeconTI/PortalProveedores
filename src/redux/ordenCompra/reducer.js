/** @format */

import {
    TRAER_ORDENES,
    TRAER_ORDENES_SUCCESS,
    TRAER_ORDENES_ERROR
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
        case TRAER_ORDENES:

            break;
        case TRAER_ORDENES_SUCCESS:
            newState.entities = action.payload.receive
            newState.timeStamp = new Date().getTime()

            break;
        case TRAER_ORDENES_ERROR:
            newState.errorTimeStamp = new Date().getTime()

            break;
    }
    return newState;
};
