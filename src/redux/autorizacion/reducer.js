/** @format */

import {
    AUTORIZACION,
    AUTORIZACION_SUCCESS,
    AUTORIZACION_ERROR,
    ACCEPT_SUCCESS,
    ACCEPT_ERROR,
    ACEPTAR_USUARIO_SUCCESS,
    ACEPTAR_USUARIO_ERROR,
    GET_PERFIL,
    GET_PERFIL_SUCCESS,
    GET_PERFIL_ERROR,
} from "./actions";

const initialState = {
    entities: null,
    tokenAutentication: null,
    timeStamp: null,
    perfilTimeStamp: null,
    errorTimeStamp: null,
    acceptTimeStamp: null,
    aceptarUsuario: {
        timeStamp: null,
        errorTimeStamp: null,
    },
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
<<<<<<< HEAD
        case AUTORIZACION:
            newState.tokenAutentication = action.token;
            break;
        case ACEPTAR_USUARIO_SUCCESS:
            newState.aceptarUsuario.timeStamp = new Date().getTime();
            break;
        case AUTORIZACION_SUCCESS:
            newState.entities = action.payload.receive;
            newState.timeStamp = new Date().getTime();
            break;
        case GET_PERFIL_SUCCESS:
            newState.entities = action.payload.receive;
            newState.perfilTimeStamp = new Date().getTime();
            break;
        case AUTORIZACION_ERROR:
        case GET_PERFIL_ERROR:
            newState.errorTimeStamp = new Date().getTime();
            break;
        case ACEPTAR_USUARIO_ERROR:
            newState.aceptarUsuario.errorTimeStamp = new Date().getTime();
            break;
        case ACCEPT_SUCCESS:
            newState.acceptTimeStamp = new Date().getTime();
            break;
        case AUTORIZACION_ERROR:
            newState.errorTimeStamp = new Date().getTime();
=======
        case LOGIN_SUCCESS_AUTO:
        case LOGIN_SUCCESS:
            newState.usuario = action.payload.receive;
            newState.loginTimeStamp = new Date().getTime();
            break;
        case LOGOUT:
            newState.logoutTimeStamp = new Date().getTime();
            break;
        case RENOVACION_SUCCESS:
            newState.renovacionTimeStamp = new Date().getTime();
            break;
        case RECUPERO_SUCCESS:
            newState.recuperoTimeStamp = new Date().getTime();
            newState.recuperoMessage = action.payload.receive;
            break;
        case LOGON_SUCCESS:
            newState.logonTimeStamp = new Date().getTime();
            newState.logonMessage = action.payload.receive;
            break;
        case UPDATE_PROFILE_SUCCESS:
            newState.updateProfileTimeStamp = new Date().getTime();
            break;
        case LOGIN_ERROR || RECUPERO_ERROR || RENOVACION_ERROR || UPDATE_PROFILE_ERROR || LOGON_ERROR:
            newState.commandErrorTimeStamp = new Date().getTime();
>>>>>>> main
            break;
    }
    return newState;
};
