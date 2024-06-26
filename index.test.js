// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musician endpoint', () => {
    beforeAll(async () => {
        await db.sync({ force: true });
        await Musician.bulkCreate(seedMusician);
    });

    it('should return all musicians', async () => {
        const response = await request(app).get('/musicians');
        expect(response.body).toEqual({});
    });    

    it('should return a single musician', async () => {
        const response = await request(app).get('/musicians/1');
        console.log(response.body);                
        expect(response.body).toHaveProperty('name');
    });

    it("should add a new musician", async () => {
        const newMusician = {
            name: "John",
            instrument: "guitar",
            BandId: 1
        };
        const response = await request(app).post('/musicians').send(newMusician);
        expect(response.body).toEqual({});
    });
});