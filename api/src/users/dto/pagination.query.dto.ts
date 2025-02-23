import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, Min, Max, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export enum SortDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export class PaginationQueryDto {
  @ApiPropertyOptional({
    description: 'Number of items per page',
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(100)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Number of items to skip',
    minimum: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(1000)
  offset?: number;

  @ApiPropertyOptional({
    description: 'Sorting direction',
    enum: SortDirectionEnum,
  })
  @IsOptional()
  @IsEnum(SortDirectionEnum, { message: 'Sort direction must be asc or desc' })
  sort_direction?: SortDirectionEnum;
}
