import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { SuperheroesModule } from './superheroes.module';

describe('SuperheroesController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SuperheroesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /superheroes', () => {
    it('should create a new superhero', async () => {
      const superheroDto = {
        name: 'Thor',
        super_power: 'Lightning flash',
        humility_score: 4,
      };

      const response = await request(app.getHttpServer())
        .post('/superheroes')
        .send(superheroDto)
        .expect(201);

      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: 'Thor',
          super_power: 'Lightning flash',
          humility_score: 4,
        })
      );
    });
  });
});