import app from '../src/server.js';
import request from 'supertest';

describe('Probar endpoints de /', () => {

    test('test de endpoint / hola mundo', async () => {
        return await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('Hola mundo al usuario');
            });
    });

    test('test de endpoint /api-key', async () => {
        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .then((response) => {
                expect(response.body.data).toContain('la apikey de mi aplicacion es:');
            });
    });

    test('test de endpoint /operar para factoriales', async () => {
        return await request(app)
            .get('/operar?operacion=factorial&num1=5')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('El resultado de la operacion es: 120');
            });
    });

    test('test de endpoint /operar para potencias', async () => {
        return await request(app)
            .get('/operar?operacion=potencia&num1=5&num2=3')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('El resultado de la operacion es: 125');
            });
    });

    test('test de endpoint /palindromo cuando es palindromo', async () => {
        return await request(app)
            .get('/palindromo?frase=anilina')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('Hola, La frase ingresada es palindromo');
            });
    });

    test('test de endpoint /palindromo cuando no es palindromo', async () => {
        return await request(app)
            .get('/palindromo?frase=hola')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('Hola, La frase ingresada no es palindromo');
            });
    });

    test('test de endpoint /primo cuando es primo', async () => {
        return await request(app)
            .get('/primo?numero=7')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('Hola, el numero ingresado es un numero primo');
            });
    });

    test('test de endpoint /primo cuando no es primo', async () => {
        return await request(app)
            .get('/primo?numero=4')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('Hola, el numero ingresado no es un numero primo');
            });
    });
});