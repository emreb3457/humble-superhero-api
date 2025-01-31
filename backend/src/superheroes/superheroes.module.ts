import { Module } from '@nestjs/common';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { SuperheroRepository } from './repository/superhero-repository';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService, SuperheroRepository],
  exports: [SuperheroRepository]
})
export class SuperheroesModule { }
