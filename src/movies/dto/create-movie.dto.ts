import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateMovieDto{
   @IsString()
   readonly title: string;
   
   @IsNumber()
   readonly year: number;

   @IsString({each:true})
   @IsOptional()
   readonly genres: string[];
}

//Dto를 쓰는 이유는, validate 검사를 편리하게 할 수 있고, 코드를 간결하게 할 수 있어서이다. 