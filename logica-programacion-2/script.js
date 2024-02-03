/*Creo una función que haga el cálculo */
function calcularTemperatura() {
    //Acá usaré el DOM para llamar a por ID al input, creando una variable let llamada input.
    let input = document.getElementById("inputTemperature").value;
    //Creo una variable let que se llame temperatura y que se encargue de trnasformar el input en un decimal (float)
    let temperatura = parseFloat(input);

    //Acá la variable let que se llama conversionType, traerá una de las opciones, si quiero pasar de celsius a Fahrenheit o viceversa, llamará el ID conversionType
    let conversionType = document.getElementById("conversionType").value;
    /*En Javascript cuando usamos getElementById estamos diciendo que traiga al elemento HTML que tiene el nombre de ID*/

    /*Creo un condificional con los parámetros: si la conversionType es igual estrictamente a "toFahrenheit" (que es una de las opciones) transformará en un resultado de Celsius a Fahrenheit y si es "toCelsius", transformará el resultado de Fahrenheit a Celsius*/
    if (!isNaN(temperatura)) {
        if (conversionType === "toFahrenheit") {
            var resultado = (temperatura * 9/5) + 32;
            alert("Grados Fahrenheit: " + resultado.toFixed(2));
        } else if (conversionType === "toCelsius") {
            var resultado = (temperatura - 32) * 5/9;
            alert("Grados Celsius: " + resultado.toFixed(2));
        }
    } else {
        console.error("Error: Ingresa un valor numérico válido.");
    }
}