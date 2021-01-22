import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';


export class CreateContactDto{

    @IsString()
    @MaxLength(100, {message: 'The name is to long'})
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly city: string;

    @IsNotEmpty()
    readonly country: string;

    @IsNotEmpty()
    readonly phone: string;

}