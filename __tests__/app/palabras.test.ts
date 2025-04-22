import { describe, test } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras";

describe("Suite de test de palabras", () => {
    test("probar si una frase es palindromo", () => {
        expect(esPalindromo("")).toBe(false);
        expect(esPalindromo("1221")).toBe(true);
        expect(esPalindromo("a")).toBe(true);
        expect(esPalindromo("aa")).toBe(true);
        expect(esPalindromo("ab")).toBe(false);
        expect(esPalindromo("aba")).toBe(true);
        expect(esPalindromo("abc")).toBe(false);
        expect(esPalindromo("abba")).toBe(true);
        expect(esPalindromo("abcba")).toBe(true);

        let a: any = 10;
        expect(esPalindromo(a)).toBe(false);

        a = 101;
        expect(esPalindromo(a)).toBe(true);

        a = null;
        expect(esPalindromo(a)).toBe(false);

        a = [1,2,3];
        expect(esPalindromo(a)).toBe(false);

        a = [1,2,3,3,2,1];
        expect(esPalindromo(a)).toBe(true);

        a = undefined;
        expect(esPalindromo(a)).toBe(false);
    });
});