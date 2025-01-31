import { Injectable, NotFoundException } from '@nestjs/common';
import { GetSuperheroDto } from './dto/request/get-superhero.dto';
import { Superhero, SuperheroRepository } from './repository/superhero-repository';

@Injectable()
export class SuperheroesService {
    constructor(
        private readonly superheroRepository: SuperheroRepository
    ) { }

    getAllSuperheroes(query: GetSuperheroDto): Superhero[] {

        const datas = this.superheroRepository.getAllSuperheroes(query);
        if (!datas.length) throw new NotFoundException()
        return datas
    }

    createSuperhero(superhero: Superhero): Superhero {
        return this.superheroRepository.createSuperhero(superhero);
    }
}
