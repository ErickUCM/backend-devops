export const esPrimo = (numero: number) => {
    if (numero === undefined) {
        throw new Error("No se puede calcular si \"undefined\" es primo");
    }
    if (typeof numero !== 'number') {
        return NaN;
    }
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true
}