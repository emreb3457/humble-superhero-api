import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

export enum SortBy {
    HUMILITY_SCORE = 'humility_score'
}

export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc'
}

export class GetSuperheroDto {
    @ApiProperty({
        required: false,
        enum: SortBy,
        default: SortBy.HUMILITY_SCORE,
        description: 'Field to sort by'
    })
    @IsOptional()
    @IsEnum(SortBy, { message: 'Sort by must be humility score' })
    sort_by?: SortBy = SortBy.HUMILITY_SCORE;

    @ApiProperty({
        required: false,
        enum: SortOrder,
        default: SortOrder.DESC,
        description: 'Sort order (asc or desc)'
    })
    @IsOptional()
    @IsEnum(SortOrder, { message: 'Sort order must be either asc or desc' })
    sort_order?: SortOrder = SortOrder.DESC;
}