/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers/connect";

const OCULTAR_SI_NO = "ui.prueba.timeStamp";

export class pruebaControl extends connect(store, OCULTAR_SI_NO)(LitElement) {
    constructor() {
        super();
    }
    static get styles() {
        return css`
            :host[hidden] {
                display: none;
            }
        `;
    }
    render() {
        return html`<div>Hola soy prueba control</div>`;
    }

    stateChanged(state, name) {
        if (name == OCULTAR_SI_NO) {
            this.hidden = state.ui.prueba.oculto;
            this.update();
        }
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true,
            },
        };
    }
}
window.customElements.define("prueba-control", pruebaControl);
