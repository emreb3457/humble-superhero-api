import {
    Body,
    Controller,
    Get,
    Post,
    Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSuperheroDto } from './dto/request/create-superhero.dto';
import { GetSuperheroDto } from './dto/request/get-superhero.dto';
import { ResponseSuperheroDto } from './dto/response/response-superhero.dto';
import { SuperheroesService } from './superheroes.service';


@ApiTags('Superheroes')
@Controller("superheroes")
export class SuperheroesController {
    constructor(private readonly superheroesService: SuperheroesService) { }

    @Post()
    createSuperhero(
        @Body() createSuperheroDto: CreateSuperheroDto,
    ): ResponseSuperheroDto {
        return this.superheroesService.createSuperhero(createSuperheroDto);
    }

    @Get()
    getSuperheroes(
        @Query() query: GetSuperheroDto,
    ): ResponseSuperheroDto[] {
        return this.superheroesService.getAllSuperheroes(query);
    }

}