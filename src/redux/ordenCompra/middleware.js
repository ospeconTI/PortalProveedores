/** @format */
import {
    TRAER_ORDENES,
    TRAER_ORDENES_SUCCESS,
    TRAER_ORDENES_ERROR
} from "./actions";

import { RESTAdd, RESTRequest, RESTUpdate } from "../rest/actions";
import { goTo } from "../routing/actions";
import { apiRequest, apiAction, apiFunction } from "../../redux/api/actions";
import { datos } from "./data";

export const traer =
    ({ dispatch }) =>
        (next) =>
            (action) => {
                next(action);
                if (action.type === TRAER_ORDENES) {
                    /*   dispatch(RESTRequest(null, null, TRAER_ORDENES_SUCCESS, TRAER_ORDENES_ERROR, "")); */
                    dispatch({
                        type: TRAER_ORDENES_SUCCESS, payload: {
                            receive: datos
                        }
                    })
                }
            };
export const traerOK =
    ({ dispatch }) =>
        (next) =>
            (action) => {
                next(action);
                if (action.type === TRAER_ORDENES_SUCCESS) {

                }
            };
export const traerError =
    ({ dispatch }) =>
        (next) =>
            (action) => {
                next(action);
                if (action.type === TRAER_ORDENES_ERROR) {

                }
            };


export const middleware = [traer, traerOK, traerError];
