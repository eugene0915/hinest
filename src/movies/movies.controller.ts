import { Controller, Get, Param, Post, Delete, Put, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
// this part controll our entry point of url 
// if removes 'movies' and stays empty, url will be localhost:3000
// if add 'movies' and url will be localhost:3000/movies
export class MoviesController {

    constructor(private readonly movieService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        // return "this will return all movies"
        return this.movieService.getAll()
    }

    // http://localhost:3000/movies/search?year=2000 
    // search?year=200 이런 것을 위해서는 @query를 사용한다. 
    @Get('/search')
    search(@Query('year') searchingYear: string) {
        return `we are searching for a movie made after ${searchingYear}`
    }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId)
        return this.movieService.getOne(movieId);

    }


    @Post()
    create(@Body() movieData :CreateMovieDto) {
        console.log(movieData)
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        // return `this will delete a movie, ==> ${movieId}`
        return this.movieService.remove(movieId);
    }
    // if we use @Put, it will update everything. 
    // so if we want to update specific things, we can use @Patch
    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        // return {
        //     updatedMovie: movieId,
        //     ...updateData,
        // }
        return this.movieService.update(movieId, updateData);
    }


}
