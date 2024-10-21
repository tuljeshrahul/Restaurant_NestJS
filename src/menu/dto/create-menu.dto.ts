import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    @IsString()
    itemName: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsString()
    description: string;
}
