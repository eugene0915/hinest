import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// @ it is called decorator, NestJs lives with decorator

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule { }

// controller take url and execute funtion.
// url을 가지고 오고, 함수를 실행한다. 

