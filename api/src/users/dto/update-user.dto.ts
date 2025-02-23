import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  Min,
  Max,
  IsEmail,
  IsString,
  IsOptional,
} from 'class-validator';

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  NON_BINARY = 'non-binary',
}

export class UpdateUserDto {
  @ApiProperty({ required: true })
  @IsString()
  first_name: string;

  @ApiProperty({ required: true })
  @IsString()
  last_name: string;

  @ApiProperty({ required: true, minimum: 15, maximum: 120 })
  @IsInt()
  @Min(15)
  @Max(120)
  age: number;

  @ApiProperty({ required: true, enum: GenderEnum })
  @IsEnum(GenderEnum, { message: 'Gender must be male, female, or non-binary' })
  gender: GenderEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;
}
