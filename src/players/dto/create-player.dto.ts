import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsNumber()
  goalCount: number
  
  @IsNotEmpty()
  @IsDateString()
  birthDate: Date

  @IsNotEmpty()
  @IsNumber()
  teamId: number
}
