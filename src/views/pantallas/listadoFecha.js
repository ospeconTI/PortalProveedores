import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { input } from "@brunomon/template-lit/src/views/css/input";
import { button } from "@brunomon/template-lit/src/views/css/button";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class listadoFecha extends connect(store, SCREEN, MEDIA_CHANGE)(LitElement) {
    constructor() {
        super();
        this.area = "body";
    }

    static get styles() {
        return css`
       ${input}
       ${button}
       ${gridLayout}
       
            :host[hidden] {
                display: none;
            }

            .mensaje {
                background-color: var(--formulario);
                color: var(--on-formulario);
                font-size: 2em;
                height: 100vh;
            }
            .contenedorListado {
                margin: 20px;
            }
            .cajaListado {
                display: grid; 
                grid-template-columns: 0.1fr 0.5fr; 
                grid-template-rows: 0.1fr 0.7fr 0.1fr; 
                gap: 0px 0px; 
                grid-template-areas: 
                ". ."
                ". ."
                ". ."; 
}

            .titulo {
                font-size: 2rem;
            }
                              
            .filtro {
                display: grid;
                gap: 3rem;
                padding: 2rem;
                grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
                
            }
           
        `;
    }

    render() {
        return html`<div class="fit18 filtro">
            <div class="titulo">Listado por fechas</div>
            <div class="input">
                <label>Fecha desde:</label>
                <input type="date" id="desde" max="2023-9-2029">
            </div>
            <div class="input">
                <label>Fecha hasta:</label>
                <input type="date" id="desde" max="2023-9-2029">  
            </div>
          
            <button flat round><div class="justify-self-end">Listar</div></button>
            <button flat round><div class="justify-self-end">Exportar</div></button>
            
            </div> `;
    }

    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-listadoFecha-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
            }
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
window.customElements.define("listado-fecha", listadoFecha);
