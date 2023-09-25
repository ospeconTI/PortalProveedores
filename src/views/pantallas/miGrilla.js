/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers/connect";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";
const OCULTAR_SI_NO = "ui.grilla.timeStamp";

export class grilla extends connect(store, OCULTAR_SI_NO)(LitElement) {
    constructor() {
        super();
        this.sortColumn = '';
        this.data = [
            {
                "nroOrdenCompras": "4500000250",
                "sociedad": 100,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000102",
                "sociedad": 200,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000431",
                "sociedad": 500,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000325",
                "sociedad": 200,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000611",
                "sociedad": 100,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000508",
                "sociedad": 100,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000998",
                "sociedad": 200,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000250",
                "sociedad": 100,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000102",
                "sociedad": 200,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000431",
                "sociedad": 500,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000325",
                "sociedad": 200,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000611",
                "sociedad": 100,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000508",
                "sociedad": 100,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
            {
                "nroOrdenCompras": "4500000998",
                "sociedad": 200,
                "claseDocumentoCompras": "NB",
                "nroCuentaProveedor": 1,
                "fechaDocumentoCompra": "2023-09-11",
                "valorTotalEnLiberacion": 150000
            },
        ]
            ;
    }

    sortData(column) {
        if (this.sortColumn === column) {
            this.data.reverse();
        } else {
            this.sortColumn = column;
            this.data.sort((a, b) => a[column] - b[column]);
            if (column === 'nroOrdenCompras') {
                this.data.sort((a, b) => new Date(a[column]) - new Date(b[column]));
            } else if (column === 'descripcion') {
                this.data.sort((a, b) => a[column].localeCompare(b[column]));
            }
        }
    }

    static get styles() {
        return css`
        ${gridLayout}
        :host {
               padding:2rem;
               display:grid;
               gap:.2rem;
               align-content:start
            }
        :host[hidden] {
                display: none;
            }
            .template{
                grid-template-columns: repeat(6, 1fr)
            }
            .cell {
                display:grid;
                padding: 1em;
                background-color:var(--formulario);
                color:var(--on-formulario)
            }
            .title{
                font-weight:bold;
                cursor:pointer;
            } 
            .mensaje{
                background: var(--formulario);
                color: var(--on-formulario);
            }
            .items{
                gap:.2rem;
                overflow-x:auto;
                height:65vh
            }
            .items::-webkit-scrollbar
            {
                width:6px;
                background-color: var(--aplicacion);
                width:.2px;
            }
            .items::-webkit-scrollbar-thumb
            {
                border-radius: 5px;
                background-color: var(--primario);
            }
        `;
    }
    render() {
        return html`
        <div class="solo-grid column template cabecera">

            <div class="cell title" @click="${() => this.sortData('nroOrdenCompras')}">Nro. de Documento de Compras</div>
            <div class="cell title" @click="${() => this.sortData('sociedad')}">Sociedad</div>
            <div class="cell title" @click="${() => this.sortData('claseDocumentoCompras')}">Clase de Documento de Compras</div>
            <div class="cell title" @click="${() => this.sortData('nroCuentaProveedor')}">Nro. de Cuenta del Proveedor</div>
            <div class="cell title" @click="${() => this.sortData('fechaDocumentoCompra')}">Fecha del Documento de Compras</div>
            <div class="cell title" @click="${() => this.sortData('valorTotalEnLiberacion')}">Total en Liberación</div>
            
        </div>
        <div class="solo-grid items">
            ${this.data.map(
            (item) => html`
                <div class="solo-grid column template">
                    <div class="cell">${item.nroOrdenCompras}</div>
                    <div class="cell">${item.sociedad}</div>
                    <div class="cell">${item.claseDocumentoCompras}</div>
                    <div class="cell end"><div>
                    ${item.nroCuentaProveedor}
                    </div>
                    </div>
                    <div class="cell">${item.fechaDocumentoCompra}</div>
                    <div class="cell end"><div>${item.valorTotalEnLiberacion}</div></div>
                </div>
            `
        )}
        </div>
      `;
    }

    stateChanged(state, name) {
        if (name == OCULTAR_SI_NO) {
            this.hidden = state.ui.grilla.oculto;
            this.update();
        }
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true,
            },
            data: { type: Array },
            sortColumn: { type: String },
        };
    }
}

window.customElements.define("mi-grilla", grilla);