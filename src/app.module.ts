import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

// @ it is called decorator, NestJs lives with decorator

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

// controller take url and execute funtion.
// url을 가지고 오고, 함수를 실행한다. 

