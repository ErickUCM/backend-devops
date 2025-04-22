import { describe, test } from "@jest/globals";
import { esPrimo } from "../../src/app/numeros";

describe("Suite de test de numeros", () => {
    test("probar si un numero es primo", () => {
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(2)).toBe(true);
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(4)).toBe(false);
        expect(esPrimo(5)).toBe(true);
        expect(esPrimo(6)).toBe(false);
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(8)).toBe(false);
        expect(esPrimo(9)).toBe(false);
        expect(esPrimo(10)).toBe(false);
        expect(esPrimo(-1)).toBe(false);

        let a: any = "10";
        expect(esPrimo(a)).toBeNaN();

        a = null;
        expect(esPrimo(a)).toBeNaN();

        a = undefined;
        expect(() => { esPrimo(a) }).toThrow("No se puede calcular si \"undefined\" es primo");

    });
});