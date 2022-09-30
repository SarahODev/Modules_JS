import RecursosHumanos, {JuegosRifasEspectaculos, reporteGerencia} from "./recursosHumanos.js";

import Ventas, {GastosMarketing} from './ventas.js';

class Contabilidad {
    constructor() {
        console.log("Iniciando Modulo de Contabilidad");
        this.recursosHumanos = new RecursosHumanos()
        this.ventas = new Ventas()
    }

    reporteDeGastos() {
        return `
            El reporte de gastos es: 
                - Juegos y Rifas: ${JuegosRifasEspectaculos.gastos}
                - Gastos Marketing: ${GastosMarketing.gastos}
        `;
    }

    reporteContabilidad() {
        return "Reporte Contabilidad " + reporteGerencia();
    }

}

let x = new Contabilidad()
console.log(x.reporteDeGastos())

export default Contabilidad;