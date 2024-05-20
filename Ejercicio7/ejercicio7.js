function lesserNumber(num) {
    // Convierte el número a una cadena
    let numStr = num.toString();
    
    // Inicializa el número más pequeño a un valor alto
    let smallest = Infinity;
    
    // Itera sobre la cadena para obtener todas las combinaciones de 3 dígitos
    for (let i = 0; i < numStr.length - 2; i++) {
        // Obtiene el número actual de 3 dígitos
        let threeDigitNumber = parseInt(numStr.substring(i, i + 3), 10);

        // Actualiza el número más pequeño si el actual es menor
        if (threeDigitNumber < smallest) {
            smallest = threeDigitNumber;
        }
    }
    
    return smallest;
}

// Función para generar un número aleatorio con una cantidad dada de dígitos
function generateRandomNumber(digits) {
    let min = Math.pow(10, digits - 1);
    let max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Casos de prueba con números aleatorios (5 pruebas)
let testNumbers = [
    generateRandomNumber(5),
    generateRandomNumber(6),
    generateRandomNumber(7),
    generateRandomNumber(8),
    generateRandomNumber(9)
];

testNumbers.forEach(num => {
    console.log(` Número: ${num}, \n Salida: ${lesserNumber(num)}\n\n`);
});

