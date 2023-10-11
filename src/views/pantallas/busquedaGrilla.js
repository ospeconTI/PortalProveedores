import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { input } from "@brunomon/template-lit/src/views/css/input";
import { button } from "@brunomon/template-lit/src/views/css/button";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";
import { select } from "@brunomon/template-lit/src/views/css/select";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class busquedaGrilla extends connect(store, SCREEN, MEDIA_CHANGE)(LitElement) {
    constructor() {
        super();
        this.area = "body";
        this.inputTipo = "n";
        this.busquedaPor = "1_n";
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
                    <option value="1_n">Documento de compra</option>
                    <option value="2_l">Sociedad</option>
                    <option value="3_s">Clase de Documento</option>
                    <option value="4_n">Nro Proveedor</option>
                    <option value="5_d">Fecha de compra</option>
                    <option value="6_n">Total en liberación</option>
                </select>
            </div>
            <div class="input" ?hidden=${this.inputTipo != "n"}>
                <input type="number" />
            </div>
            <div class="input" ?hidden=${this.inputTipo != "d"}>
                <input type="date" />
            </div>
            <div class="input" ?hidden=${this.inputTipo != "s"}>
                <input type="text" />
            </div>
            <div class="select" ?hidden=${this.inputTipo != "l"}>
                <label>Buscar por</label>
                <select>
                    <option>100</option>
                    <option value="2_l">Sociedad</option>
                    <option value="3_s">Clase de Documento</option>
                    <option value="4_n">Nro Proveedor</option>
                    <option value="5_d">Fecha de compra</option>
                    <option value="6_n">Total en liberación</option>
                </select>
            </div>

            <button class="justify-self-start" flat round>Buscar</button>
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

    cambioTipoInput(e) {
        this.busquedaPor = e.currentTarget.value;
        this.inputTipo = this.busquedaPor.split("_")[1];
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
