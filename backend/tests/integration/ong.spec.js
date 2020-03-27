const request = require('supertest');
const app = require('../../src/app');
const conection = require('../../src/database/conection');

describe('ONG', () => {
    beforeEach(async () => {
        await conection.migrate.rollback();
        await conection.migrate.latest();
    });

    afterAll(async () => {
        await conection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
	        email: "contacto@test.com",
	        whatsapp: "930000000",
	        city: "Viseu"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
});