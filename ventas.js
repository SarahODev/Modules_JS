/*● Crea un nuevo módulo llamado Ventas
● El módulo de ventas debe tener una clase principal y en su constructor un console.log que
imprima "Iniciando Modulo de Ventas"
● La clase Ventas debe ser el default export de este módulo
● El módulo de ventas debe exportar un objeto llamado GastosMarketing que tenga una
propiedad gastos y el valor de esta propiedad es de 1000000
● Importar la clase principal de Ventas en el módulo de Contabilidad y en el constructor de
contabilidad crear un objeto de la clase Ventas.
● Importar el objeto GastosMarketing del modulo de ventas y agregar un nuevo item en el
string del reporteDeGastos que sea "- Gastos Marketing: 1000000". Importante que para el
valor se use el objeto que se importa de ventas*/

class Ventas{
    constructor(){
        console.log ('Iniciando Modulos de Ventas')
    }
}
export const GastosMarketing = {
    gastos:1000000
}

export default Ventas;