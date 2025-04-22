function operar(operacion: string, a: number, b?: number) {
    if (operacion === 'suma' && b !== undefined) {
        return suma(a, b);
    } else if (operacion === 'resta' && b !== undefined) {
        return restar(a, b);
    } else if (operacion === 'multiplicar' && b !== undefined) {
        return multiplicar(a, b);
    } else if (operacion === 'dividir' && b !== undefined) {
        return dividir(a, b);
    } else if (operacion === 'potencia' && b !== undefined) {
        return potencia(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    }
}

function suma(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede elevar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return Math.pow(a, b);
}

function factorial(a: number) {
    if (a === undefined) {
        throw new Error("No se puede calcular el factorial de indefinidos");
    }
    if (typeof a !== 'number') {
        return NaN;
    }
    if (a < 0) {
        throw new Error("No se puede calcular el factorial de un número negativo");
    }
    if (a === 0 || a === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= a; i++) {
        resultado *= i;
    }
    return resultado;
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };