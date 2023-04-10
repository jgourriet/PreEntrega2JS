// Creación de la Marca

const MARCA = "CASA DE CAMBIO JS"
const BIENVENIDA = ("¡Bienvenido a la " + MARCA + "!");

console.log(MARCA);
alert(MARCA);




// Declaración de Variables y Constantes

let cantidadDivisaCompra = 0;

const IMPUESTO_PAIS = 0.30;
const IMPUESTO_GANANCIA = 0.45;

let inicio = 0;

let flecha = "--> ";
let espacio = ", ";

let fecha = new Date();




// Creación de Clase Constructora de Objeto (Cliente)

class Cliente {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
}




// Ingreso de Datos del CLIENTE

let clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());

while ((clienteUno.nombre == "") || (clienteUno.apellido == "") || (clienteUno.correo == "") || ((clienteUno.correo).search("@") == -1)) {

    console.log("Debes ingresar todos los campos solicitados");
    alert("Debes ingresar todos los campos solicitados");

    clienteUno = new Cliente(prompt("Ingrese Su Nombre").toLocaleUpperCase(), prompt("Ingrese Su Apellido").toLocaleUpperCase(), prompt("Ingrese Su Correo Electrónico").toLocaleUpperCase());
}




// Bienvenida al Cliente

console.log(BIENVENIDA + " " + clienteUno.toString());
alert(BIENVENIDA + " " + clienteUno.toString());





// Creación de Array (Lista de Operaciones)

let listaOperaciones = ["1.- Consultar Precios", "2.- Comprar", "3.- Vender", "4.- Salir"];





// Selección de la Operación a realizar

console.log(); ("En nuestra " + MARCA + ", " + "podrás realizar diferentes operaciones: " + "\n\n" + listaOperaciones[0] + "\n" + listaOperaciones[1] + "\n" + listaOperaciones[2]);
alert("En nuestra " + MARCA + ", " + "podrás realizar diferentes operaciones: " + "\n\n" + listaOperaciones[0] + "\n" + listaOperaciones[1] + "\n" + listaOperaciones[2]);





// Creación de Array con Objeto (Divisas)

class Divisa {
    constructor(simbolo, nombre, precioCompra, precioVenta) {
        this.simbolo = simbolo;
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
    }
    toString() {
        return this.nombre;
    }
}

let listaDivisas = [];

listaDivisas.push(new Divisa("USD $", "Dólar", 172.50, 181));
listaDivisas.push(new Divisa("EUR €", "Euro", 170.30, 182.70));
listaDivisas.push(new Divisa("BRL R$", "Real", 32.10, 39.60));
listaDivisas.push(new Divisa("CLP $", "Peso Chileno", 0.1810, 0.2158));
listaDivisas.push(new Divisa("$U", "Peso Uruguayo", 3.76, 4.06));
listaDivisas.push(new Divisa("CHF Fr", "Franco Suizo", 150.00, 160.00));
listaDivisas.push(new Divisa("GBP £", "Libra Esterlina", 197.90, 216.00));
listaDivisas.push(new Divisa("PEN S/", "Sol Peruano", 48.00, 58.00));






// Creación de Funciones sin Parámetros

// MEJORADO
function elegirOperacion() {

    let operacion = parseInt(prompt("¿Qué deseas hacer? (Ingresa el número de la opción que deseas realizar):" + "\n\n" + (listaOperaciones[0]) + "\n" + (listaOperaciones[1]) + "\n" + (listaOperaciones[2]) + "\n" + (listaOperaciones[3]) + "\n"));

    switch (operacion) {
        case 1:

            console.log("¡Quieres Consultar el Precio de una divisa!");
            alert("¡Quieres Consultar el Precio de una divisa!");
            consultaGeneral();
            volver();

            break;
        case 2:

            consulta("Compra");
            compra();
            volver();

            break;
        case 3:

            consulta("Venta");
            venta();
            volver();

            break;
        case 4:

            volver();

            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            elegirOperacion();
            break;
    }
}

// MEJORADO
function consultaGeneral() {
    console.log("El Precio Actual de las divisas es: ", "\n", fecha.toUTCString(), listaDivisas[0], "\n", listaDivisas[1], "\n", listaDivisas[2], "\n", listaDivisas[3], "\n", listaDivisas[4], "\n", listaDivisas[5], "\n", listaDivisas[6], "\n", listaDivisas[7]);

    alert("El Precio Actual de las divisas es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + listaDivisas[0].simbolo + espacio + listaDivisas[0].nombre + espacio + " Precio para la Compra: " + listaDivisas[0].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[0].precioVenta + "\n\n" + flecha + listaDivisas[1].simbolo + espacio + listaDivisas[1].nombre + espacio + " Precio para la Compra: " + listaDivisas[1].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[1].precioVenta + "\n\n" + flecha + listaDivisas[2].simbolo + espacio + listaDivisas[2].nombre + espacio + " Precio para la Compra: " + listaDivisas[2].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[2].precioVenta + "\n\n" + flecha + listaDivisas[3].simbolo + espacio + listaDivisas[3].nombre + espacio + " Precio para la Compra: " + listaDivisas[3].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[3].precioVenta + "\n\n" + flecha + listaDivisas[4].simbolo + espacio + listaDivisas[4].nombre + espacio + " Precio para la Compra: " + listaDivisas[4].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[4].precioVenta + "\n\n" + flecha + listaDivisas[5].simbolo + espacio + listaDivisas[5].nombre + espacio + " Precio para la Compra: " + listaDivisas[5].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[5].precioVenta + "\n\n" + flecha + listaDivisas[6].simbolo + espacio + listaDivisas[6].nombre + espacio + " Precio para la Compra: " + listaDivisas[6].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[6].precioVenta + "\n\n" + flecha + listaDivisas[7].simbolo + espacio + listaDivisas[7].nombre + espacio + " Precio para la Compra: " + listaDivisas[7].precioCompra + espacio + " Precio para la Venta: " + listaDivisas[7].precioVenta);
}


// LE FALTA LA ARROW FUNCTION
function compra() {

    let seleccionDivisaCompra = parseInt(prompt("¿Qué tipo de Divisa deseas comprar? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- " + (listaDivisas[0].nombre) + "\n" + "2.- " + (listaDivisas[1].nombre) + "\n" + "3.- " + (listaDivisas[2].nombre) + "\n" + "4.- " + (listaDivisas[3].nombre) + "\n" + "5.- " + (listaDivisas[4].nombre) + "\n" + "6.- " + (listaDivisas[5].nombre) + "\n" + "7.- " + (listaDivisas[6].nombre) + "\n" + "8.- " + (listaDivisas[7].nombre) + "\n" + "9.- Volver al Inicio"));

    switch (seleccionDivisaCompra) {
        case 1:

            calcularCambioCompra("Dólares", listaDivisas[0].precioCompra);
            break;

        case 2:
            calcularCambioCompra("Euros", listaDivisas[1].precioCompra);
            break;

        case 3:
            calcularCambioCompra("Reales", listaDivisas[2].precioCompra);
            break;

        case 4:
            calcularCambioCompra("Pesos Chilenos", listaDivisas[3].precioCompra);
            break;

        case 5:
            calcularCambioCompra("Pesos Uruguayos", listaDivisas[4].precioCompra);
            break;

        case 6:
            calcularCambioCompra("Franco Suizo", listaDivisas[5].precioCompra);
            break;

        case 7:
            calcularCambioCompra("Libra Esterlina", listaDivisas[6].precioCompra);
            break;

        case 8:
            calcularCambioCompra("Sol Peruano", listaDivisas[7].precioCompra);
            break;

        case 9:
            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 9");
            alert("Solo puedes elegir un número entre 1 y 9");
            compra();
            break;
    }
}

// MEJORADO
function venta() {

    let seleccionDivisaVenta = parseInt(prompt("¿Qué tipo de Divisa deseas vender? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- " + (listaDivisas[0].nombre) + "\n" + "2.- " + (listaDivisas[1].nombre) + "\n" + "3.- " + (listaDivisas[2].nombre) + "\n" + "4.- " + (listaDivisas[3].nombre) + "\n" + "5.- " + (listaDivisas[4].nombre) + "\n" + "6.- " + (listaDivisas[5].nombre) + "\n" + "7.- " + (listaDivisas[6].nombre) + "\n" + "8.- " + (listaDivisas[7].nombre) + "\n" + "9.- Volver al Inicio"));

    switch (seleccionDivisaVenta) {
        case 1:

            calcularCambioVenta("Dólares", (listaDivisas[0].precioVenta));
            break;

        case 2:
            calcularCambioVenta("Euros", (listaDivisas[1].precioVenta));
            break;

        case 3:
            calcularCambioVenta("Reales", (listaDivisas[2].precioVenta));
            break;

        case 4:
            calcularCambioVenta("Pesos Chilenos", (listaDivisas[3].precioVenta));
            break;

        case 5:
            calcularCambioVenta("Pesos Uruguayos", (listaDivisas[4].precioVenta));
            break;

        case 6:
            calcularCambioVenta("Franco Suizo", (listaDivisas[5].precioVenta));
            break;

        case 7:
            calcularCambioVenta("Libra Esterlina", (listaDivisas[6].precioVenta));
            break;

        case 8:
            calcularCambioVenta("Sol Peruano", (listaDivisas[7].precioVenta));
            break;

        case 9:
            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 9");
            alert("Solo puedes elegir un número entre 1 y 9");
            compra();
            break;
    }
}

// MEJORADO
function volver() {

    inicio = parseInt(prompt("¿Qué deseas hacer? (Ingresa el número de la opción correspondiente): " + "\n\n" + (("1.- Volver al Inicio").toString()) + "\n" + (("2.- Salir\n".toString()))));

    switch (inicio) {
        case 1:
            break;

        case 2:
            break;

        default:
            console.log("Solo puedes elegir entre 1 y 2");
            alert("Solo puedes elegir entre 1 y 2");
            volver();
            break;
    }

}

// DEFINITIVO
function salida() {
    console.log("Gracias por preferir a " + MARCA + ". Será hasta una próxima ocasión. ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + ". Será hasta una próxima ocasión. ¡Hasta Luego!");
}




// Creación de Array con Objeto (Stock de Divisas)

class stockDivisa {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    toString() {
        return this.nombre;
    }
}

let stockDivisas = [];

stockDivisas.push(new stockDivisa("Dólar", 20000));
stockDivisas.push(new stockDivisa("Euro", 15000));
stockDivisas.push(new stockDivisa("Real", 50000));
stockDivisas.push(new stockDivisa("Peso Chileno", 100000));
stockDivisas.push(new stockDivisa("Peso Uruguayo", 60000));
stockDivisas.push(new stockDivisa("Franco Suizo", 10000));
stockDivisas.push(new stockDivisa("Libra Esterlina", 5000));
stockDivisas.push(new stockDivisa("Sol Peruano", 150000));




// Creación de Funciones con Parámetros

function consulta(nombreConsulta) {

    let dolarTasa = "";
    let euroTasa = "";
    let realTasa = "";
    let pesoChilenoTasa = "";
    let pesoUruguayoTasa = "";
    let francoTasa = "";
    let libraTasa = "";
    let solTasa = "";

    let fecha = new Date();
    let flecha = "--> ";

    if (nombreConsulta === "Compra") {

        dolarTasa = listaDivisas[0].precioCompra;
        euroTasa = listaDivisas[1].precioCompra;
        realTasa = listaDivisas[2].precioCompra;
        pesoChilenoTasa = listaDivisas[3].precioCompra;
        pesoUruguayoTasa = listaDivisas[4].precioCompra;
        francoTasa = listaDivisas[5].precioCompra;
        libraTasa = listaDivisas[6].precioCompra;
        solTasa = listaDivisas[7].precioCompra;

    } else {

        dolarTasa = listaDivisas[0].precioVenta;
        euroTasa = listaDivisas[1].precioVenta;
        realTasa = listaDivisas[2].precioVenta;
        pesoChilenoTasa = listaDivisas[3].precioVenta;
        pesoUruguayoTasa = listaDivisas[4].precioVenta;
        francoTasa = listaDivisas[5].precioVenta;
        libraTasa = listaDivisas[6].precioVenta;
        solTasa = listaDivisas[7].precioVenta;
    }

    console.log("El precio de las Divisas para la " + nombreConsulta + " es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + ("Dólar = " + dolarTasa.toString() + " AR $ por Dólar.") + "\n" + flecha + ("Euro = " + euroTasa.toString() + " AR $ por Euro.") + "\n" + flecha + ("Real = " + realTasa.toString() + " AR $ por Real.") + "\n" + flecha + ("Peso Chileno = " + pesoChilenoTasa.toString() + " AR $ por Peso Chileno.") + "\n" + flecha + ("Peso Uruguayo = " + pesoUruguayoTasa.toString() + " AR $ por Peso Uruguayo.") + "\n" + flecha + ("Franco = " + francoTasa.toString() + " AR $ por Franco.") + "\n" + flecha + ("Libra Esterlina = " + libraTasa.toString() + " AR $ por Libra Esterlina.") + "\n" + flecha + ("Sol = " + solTasa.toString() + " AR $ por Sol Peruano."));

    alert("El precio de las Divisas para la " + nombreConsulta + " es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + ("Dólar = " + dolarTasa.toString() + " AR $ por Dólar.") + "\n" + flecha + ("Euro = " + euroTasa.toString() + " AR $ por Euro.") + "\n" + flecha + ("Real = " + realTasa.toString() + " AR $ por Real.") + "\n" + flecha + ("Peso Chileno = " + pesoChilenoTasa.toString() + " AR $ por Peso Chileno.") + "\n" + flecha + ("Peso Uruguayo = " + pesoUruguayoTasa.toString() + " AR $ por Peso Uruguayo.") + "\n" + flecha + ("Franco = " + francoTasa.toString() + " AR $ por Franco.") + "\n" + flecha + ("Libra Esterlina = " + libraTasa.toString() + " AR $ por Libra Esterlina.") + "\n" + flecha + ("Sol = " + solTasa.toString() + " AR $ por Sol Peruano."));

}



// FALTA ARREGLAR LA ARROW FUNCTION
function calcularCambioCompra(nombreDivisa, tasaCambio) {

    do {

        cantidadDivisaCompra = prompt("Ingrese la cantidad expresada en números de la Divisa que deseas comprar (Puedes usar decimales):");

        if (isNaN(cantidadDivisaCompra)) {
            console.log("Solo puedes Ingresar un número");
            alert("Solo puedes Ingresar un número");
        }

    } while (isNaN(cantidadDivisaCompra));

    console.log("Quieres Comprar " + cantidadDivisaCompra + " " + nombreDivisa);
    alert("Quieres Comprar " + cantidadDivisaCompra + " " + nombreDivisa);




    // Aquí debería ir la Función comentada (menorQue)




    let subTotalCompra = cantidadDivisaCompra * tasaCambio;
    console.log("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
    alert("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");

    let subTotalPaisCompra = subTotalCompra * IMPUESTO_PAIS;
    let subTotalGananciaCompra = subTotalCompra * IMPUESTO_GANANCIA;
    let totalCompra = subTotalCompra + subTotalPaisCompra + subTotalGananciaCompra;

    console.log("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());
    alert("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());

    console.log("Gracias por preferir a " + MARCA);
    alert("Gracias por preferir a " + MARCA);




    // function menorQue(stockDeDivisa) {
    //     return (cantidadDeDivisaCompra) => cantidadDeDivisaCompra <= stockDeDivisa
    // }

    // let menorQueCantidad = menorQue((stockDivisas[0].cantidad));

    // if (menorQueCantidad(cantidadDivisaCompra)) {

    //     let subTotalCompra = cantidadDivisaCompra * tasaCambio;
    //     console.log("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
    //     alert("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");

    //     let subTotalPaisCompra = subTotalCompra * IMPUESTO_PAIS;
    //     let subTotalGananciaCompra = subTotalCompra * IMPUESTO_GANANCIA;
    //     let totalCompra = subTotalCompra + subTotalPaisCompra + subTotalGananciaCompra;

    //     console.log("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());
    //     alert("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());

    //     console.log("Gracias por preferir a " + MARCA);
    //     alert("Gracias por preferir a " + MARCA);



    //     stockDivisas[0].cantidad = (stockDivisas[0].cantidad) - cantidadDivisaCompra;
    //     console.log((stockDivisas[0].cantidad));



    // } else {
    //     console.log("Lo máximo que puedes comprar en el día de hoy es " + (stockDivisas[0].cantidad) + " " + "Dólares");
    //     alert("Lo máximo que puedes comprar en el día de hoy es " + (stockDivisas[0].cantidad) + " " + "Dólares");
    // }

}




// FALTA ARREGLAR LA ARROW FUNCTION
function calcularCambioVenta(nombreDivisa, tasaCambio) {

    do {

        cantidadDivisaVenta = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));

        if (isNaN(cantidadDivisaVenta)) {
            console.log("Solo puedes Ingresar un número");
            alert("Solo puedes Ingresar un número");
        }

    } while (isNaN(cantidadDivisaVenta));


    console.log("Quieres Vender " + cantidadDivisaVenta + " " + nombreDivisa);
    alert("Quieres Vender " + cantidadDivisaVenta + " " + nombreDivisa);

    let subTotalVenta = cantidadDivisaVenta * tasaCambio;
    console.log("El detalle de la operación es: \n" + "AR $ " + subTotalVenta.toString());
    alert("El detalle de la operación es: \n" + "AR $ " + subTotalVenta.toString());


    console.log("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEn total recibirás AR $" + subTotalVenta.toString());
    alert("Datos de la Operación: \n" + fecha.toUTCString() + "\n" + clienteUno.nombre + " " + clienteUno.apellido + ", " + clienteUno.correo + ": \nEn total recibirás AR $" + subTotalVenta.toString());

    console.log("Gracias por preferir a " + MARCA);
    alert("Gracias por preferir a " + MARCA);

}



// Llamado a la Función (Elegir Operación)

elegirOperacion();

while (inicio !== 2) {

    elegirOperacion();

}



// Llamado a la Función (Salida)

salida();