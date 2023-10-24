import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { input } from "@brunomon/template-lit/src/views/css/input";
import { button } from "@brunomon/template-lit/src/views/css/button";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";
import { select } from "@brunomon/template-lit/src/views/css/select";
import {filtro} from "../../redux/busquedaGrilla/actions"

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class busquedaGrilla extends connect(store, SCREEN, MEDIA_CHANGE)(LitElement) {
    constructor() {
        super();
        this.area = "body";
        this.inputTipo = "n";
        this.busquedaPor = "nroOrdenCompras";
        this.buscador = null;
    }

    static get styles() {
        return css`
            ${input}
            ${button}
            ${gridLayout}
            ${select}
            :host[hidden] {
                display: none;
            }

            .filtro {
                display: grid;
                gap: 3rem;
                padding: 2rem;
            }
            *[hidden] {
                display: none;
            }
        `;
    }

    render() {
        return html`<div class="fit18 filtro">
            <div class="select">
                <label>Buscar por</label>
                <select @change=${this.cambioTipoInput}>
                    <option selected value="nroOrdenCompras_n">Documento de compra</option>
                    <option value="sociedad_l">Sociedad</option>
                    <option value="claseDocumentoCompras_s">Clase de Documento</option>
                    <option value="nroCuentaProveedor_n">Nro Proveedor</option>
                    <option value="fechaDocumentoCompra_d">Fecha de compra</option>
                    <option value="valorTotalEnLiberacion_n">Total en liberación</option>
                </select>
            </div>
            <div class="input" ?hidden=${this.inputTipo != "n"}>
                <input id="n" type="number" />
            </div>
            <div class="input" ?hidden=${this.inputTipo != "d"}>
                <input id="d" type="date" />
            </div>
            <div class="input" ?hidden=${this.inputTipo != "s"}>
                <input id="s" type="text" />
            </div>
            <div class="select" ?hidden=${this.inputTipo != "l"}>
                <label>Buscar por</label>
                <select id="l">
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">400</option>
                    <option value="400">500</option>
                </select>
            </div>

            <button class="justify-self-start" flat round @click=${this.realizarBusqueda}>Buscar</button>
        </div> `;
    }

    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-busquedaGrilla-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
            }
        }
    }

    realizarBusqueda(e) {
        let controlBusqueda = this.shadowRoot.querySelector("#"+this.inputTipo);
        let valor = controlBusqueda.value;
        store.dispatch(filtro(this.busquedaPor,valor))
       
    }

    cambioTipoInput(e) {
        this.busquedaPor = e.currentTarget.value.split("_")[0];
        this.inputTipo = e.currentTarget.value.split("_")[1];
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true,
            },
            inputTipo: {
                type: String,
                reflect: true,
            },
        };
    }
}
window.customElements.define("busqueda-grilla", busquedaGrilla);
