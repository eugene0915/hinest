import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// @ it is called decorator, NestJs lives with decorator

@Module({
 
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MovieModule { }

// controller take url and execute funtion.
// url을 가지고 오고, 함수를 실행한다. 

