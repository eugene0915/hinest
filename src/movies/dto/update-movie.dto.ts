import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// export class UpdateMovieDto{
//    @IsString()
//    readonly title?: string;
   
//    @IsNumber()
//    readonly year?: number;
   
//    @IsString({each:true})
//    readonly genres?: string[];
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto){

}

//Dto를 쓰는 이유는, validate 검사를 편리하게 할 수 있고, 코드를 간결하게 할 수 있어서이다. 