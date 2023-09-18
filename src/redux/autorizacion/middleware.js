/** @format */
import {
    AUTORIZACION,
    AUTORIZACION_SUCCESS,
    AUTORIZACION_ERROR,
    ACCEPT,
    ACCEPT_SUCCESS,
    ACCEPT_ERROR,
    ACEPTAR_USUARIO,
    ACEPTAR_USUARIO_SUCCESS,
    ACEPTAR_USUARIO_ERROR,
    GET_PERFIL,
    GET_PERFIL_SUCCESS,
    GET_PERFIL_ERROR,
} from "./actions";

import { RESTAdd, RESTRequest, RESTUpdate } from "../rest/actions";
import { goTo } from "../routing/actions";
import { apiRequest, apiAction, apiFunction } from "../../redux/api/actions";
import { autorizacionFetch, acceptFetch, autorizacionAceptarUsuarioFetch } from "../fetchs";
import { autorizacion as autorizar } from "./actions";

export const autorizacion =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
<<<<<<< HEAD
        if (action.type === AUTORIZACION) {
            dispatch(RESTRequest(autorizacionFetch, "?token=" + action.token, AUTORIZACION_SUCCESS, AUTORIZACION_ERROR, ""));
        }
    };
export const getPerfil =
=======
        if (action.type === LOGIN) {
            const success = action.auto ? action.loginSuccessAuto : action.loginSuccess;

            //reemplazar esto por lo qur corresponda para loguearse
            dispatch(RESTAdd(loginFetch, { Username: action.email.toLowerCase(), Password: action.password }, success, action.loginError, "", ""));
            //dispatch({ type: success, payload: { receive: {} } });
        }
    };

export const logout =
>>>>>>> main
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
<<<<<<< HEAD
        if (action.type === GET_PERFIL) {
            dispatch(RESTRequest(autorizacionFetch, "?token=" + action.token, GET_PERFIL_SUCCESS, GET_PERFIL_ERROR, ""));
        }
    };

export const aceptarUsuario =
=======
        if (action.type === LOGOUT) {
            //dispatch(setPrestador(0));
            //dispatch(goTo("login"));
        }
    };

export const recupero =
>>>>>>> main
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
<<<<<<< HEAD
        if (action.type === ACEPTAR_USUARIO) {
            dispatch(RESTAdd(autorizacionAceptarUsuarioFetch, action.body, ACEPTAR_USUARIO_SUCCESS, ACEPTAR_USUARIO_ERROR, ""));
        }
    };

export const autorizacionSuccess =
=======
        if (action.type === RECUPERO) {
            dispatch(apiFunction(recuperoFetch, "PedirRecupero(mail='" + action.email.toLowerCase() + "')", RECUPERO_SUCCESS, RECUPERO_ERROR));
        }
    };

export const renovacion =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === RENOVACION) {
        }
    };

export const logon =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === LOGON) {
            dispatch(apiAction(logonFetch, null, "mail='" + action.email.toLowerCase() + "'", "", LOGON_SUCCESS, LOGON_ERROR));
        }
    };

export const updateProfile =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === UPDATE_PROFILE) {
        }
    };

export const processLogin =
>>>>>>> main
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
<<<<<<< HEAD
        if (action.type === AUTORIZACION_SUCCESS) {
        }
    };

export const accept =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ACCEPT) {
            dispatch(RESTAdd(acceptFetch, { AfiliadoId: action.id }, ACCEPT_SUCCESS, ACCEPT_ERROR, getState().autorizacion.entities.token));
        }
    };

export const acceptSuccess =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ACCEPT_SUCCESS) {
            dispatch(autorizar(getState().autorizacion.tokenAutentication));
        }
    };

export const middleware = [autorizacion, aceptarUsuario, accept, acceptSuccess, autorizacionSuccess, getPerfil];
=======
        if (action.type === LOGIN_SUCCESS || action.type === LOGIN_SUCCESS_AUTO) {
            if (!action.payload.receive.Profiles || action.payload.receive.Profiles.length == 0 || action.payload.receive.message || action.payload.receive.length == 0) {
                loginErroneo();
                viewMode("login");
            } else {
                viewMode("main");
            }
        }
    };

export const processRecupero =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === RECUPERO_SUCCESS) {
        }
    };

export const processRenovado =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === RENOVACION_SUCCESS) {
        }
    };

export const processCommand =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === LOGON_SUCCESS || action.type === UPDATE_PROFILE_SUCCESS) {
        }
    };

export const processError =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === LOGIN_ERROR || action.type === RENOVACION_ERROR || action.type === RECUPERO_ERROR || action.type == LOGON_ERROR || action.type == UPDATE_PROFILE_ERROR) {
        }
    };

export const middleware = [login, logout, recupero, renovacion, logon, updateProfile, processLogin, processRecupero, processRenovado, processCommand, processError];
>>>>>>> main
