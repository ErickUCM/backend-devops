import { describe, test } from "@jest/globals";
import { restar, suma, multiplicar, dividir, potencia, factorial, operar } from "../../src/app/calculadora";

describe("Suite de test de calculadora", () => {

    test("probar suma de enteros", () => {

        expect(suma(1, 1)).toBe(2);
        expect(suma(10, 15)).toBe(25);
        expect(suma(10, 15)).not.toBe(30);

        let a: any = "10";
        let b: any = "15";
        expect(suma(a, 15)).toBeNaN();
        expect(suma(a, b)).toBeNaN();

        a = 1.5
        expect(suma(a, 15)).toBe(16.5)

        a = null
        expect(suma(a, 15)).toBeNaN();

        a = Math.PI
        expect(suma(a, 15)).toBeCloseTo(18.14, 2);

        a = -10
        expect(suma(a, 15)).toBe(5);

        a = undefined
        expect(() => { suma(a, 15) }).toThrow("No se puede sumar indefinidos");
    });

    test("probar resta de enteros", () => {

        expect(restar(10, 1)).toBe(9);
        expect(restar(10, 15)).toBe(-5);
        expect(restar(10, -10)).not.toBe(0);
        expect(restar(-14, -14)).toBe(0);

        let a: any = "10";
        expect(restar(a, 1)).toBeNaN();

        a = "";
        expect(restar(a, 1)).toBeNaN();

        a = undefined;
        expect(() => { restar(a, 1) }).toThrow("No se puede restar indefinidos");

        a = null;
        expect(restar(a, 1)).toBeNaN();
    });

    test("probar multiplicacion de enteros", () => {
        expect(multiplicar(2, 3)).toBe(6);
        expect(multiplicar(0, 5)).toBe(0);
        expect(multiplicar(-2, 3)).toBe(-6);

        let a: any = "4";
        expect(multiplicar(a, 2)).toBeNaN();

        a = undefined;
        expect(() => { multiplicar(a, 2) }).toThrow("No se puede multiplicar indefinidos");

        a = null;
        expect(multiplicar(a, 2)).toBeNaN();
    });

    test("probar division de enteros", () => {
        expect(dividir(6, 3)).toBe(2);
        expect(dividir(6, -3)).toBe(-2);
        expect(dividir(0, 3)).toBe(0);

        let a: any = "6";
        expect(dividir(a, 3)).toBeNaN();

        a = undefined;
        expect(() => { dividir(a, 3) }).toThrow("No se puede dividir indefinidos");

        expect(() => { dividir(5, 0) }).toThrow("No se puede dividir entre cero");

    });

    test("probar potencia de enteros", () => {
        expect(potencia(2, 3)).toBe(8);
        expect(potencia(5, 0)).toBe(1);
        expect(potencia(0, 5)).toBe(0);
        expect(potencia(-2, 3)).toBe(-8);
        expect(potencia(2, -3)).toBe(0.125);

        let a: any = "2";
        expect(potencia(a, 3)).toBeNaN();

        a = undefined;
        expect(() => { potencia(a, 3) }).toThrow("No se puede elevar indefinidos");

        a = null;
        expect(potencia(a, 3)).toBeNaN();
    });

    test("probar factorial de enteros", () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(5)).toBe(120);

        let a: any = "5";
        expect(factorial(a)).toBeNaN();

        a = -3;
        expect(() => { factorial(a) }).toThrow("No se puede calcular el factorial de un número negativo");

        a = undefined;
        expect(() => { factorial(a) }).toThrow("No se puede calcular el factorial de indefinidos");

        a = null;
        expect(factorial(a)).toBeNaN();
    });

    test("probar operacion de enteros", () => {
        expect(() => { operar("suma", 1, 2) }).not.toThrow();
        expect(operar("suma", 1, 2)).toBe(3);
        expect(operar("resta", 5, 3)).toBe(2);
        expect(operar("multiplicar", 2, 3)).toBe(6);
        expect(operar("dividir", 6, 3)).toBe(2);
        expect(operar("potencia", 2, 3)).toBe(8);
        expect(operar("factorial", 5)).toBe(120);

        let a: any = "5";
        expect(operar("suma", a, 3)).toBeNaN();

        a = undefined;
        expect(() => { operar("suma", a, 3) }).toThrow("No se puede sumar indefinidos");

        a = null;
        expect(operar("suma", a, 3)).toBeNaN();
    });
});