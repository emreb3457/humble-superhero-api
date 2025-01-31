import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateSuperheroDto {
    @ApiProperty()
    @IsString({ message: 'Name must be a string' })
    @MaxLength(32, { message: 'Name cannot be longer than 32 characters' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @ApiProperty()
    @IsString({ message: 'Super power must be a string' })
    @MaxLength(32, { message: 'Super power cannot be longer than 32 characters' })
    @IsNotEmpty({ message: 'Super power is required' })
    super_power: string;

    @ApiProperty()
    @IsNumber({}, { message: 'Humility score must be a number' })
    @IsNotEmpty({ message: 'Humility score is required' })
    @Min(1, { message: 'Humility score must be at least 1' })
    @Max(10, { message: 'Humility score cannot be greater than 10' })
    humility_score: number;
}