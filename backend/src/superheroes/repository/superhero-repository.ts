import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';
import { GetSuperheroDto, SortOrder } from '../dto/request/get-superhero.dto';

export interface Superhero {
    id?: number;
    name: string;
    super_power: string;
    humility_score: number;
}

@Injectable()
export class SuperheroRepository {
    private cache: NodeCache;
    private id = 1;
    private readonly CACHE_KEY = process.env.CACHE_KEY || "superhero";

    constructor() {
        this.cache = new NodeCache();
        this.cache.set(this.CACHE_KEY, []);
    }

    getAllSuperheroes(query: GetSuperheroDto): Superhero[] {
        const { sort_by: sortBy, sort_order: sortOrder } = query;
        const superheroes = this.cache.get<Superhero[]>(this.CACHE_KEY) || [];

        if (!sortBy) return [...superheroes];

        return [...superheroes].sort((a, b) => {
            const order = sortOrder === SortOrder.DESC ? -1 : 1;
            return a[sortBy] < b[sortBy] ? -order : a[sortBy] > b[sortBy] ? order : 0;
        });
    }

    createSuperhero(superhero: Superhero): Superhero {
        const superheroes = this.cache.get<Superhero[]>(this.CACHE_KEY) || [];
        const newSuperhero = { id: this.id++, ...superhero };
        superheroes.push(newSuperhero);
        this.cache.set(this.CACHE_KEY, superheroes);
        return newSuperhero;
    }
}
