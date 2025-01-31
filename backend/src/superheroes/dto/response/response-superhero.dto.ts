import { ApiProperty } from '@nestjs/swagger';

export class ResponseSuperheroDto {
    @ApiProperty({})
    id?: number;

    @ApiProperty({})
    name: string;

    @ApiProperty({})
    super_power: string;

    @ApiProperty({})
    humility_score: number;
}