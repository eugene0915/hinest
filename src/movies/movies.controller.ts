import { Controller, Get, Param, Post, Delete, Put, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

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
    getOne(@Param('id') movieId: string): Movie {
        return this.movieService.getOne(movieId);

    }


    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        // return `this will delete a movie, ==> ${movieId}`
        return this.movieService.remove(movieId);
    }
    // if we use @Put, it will update everything. 
    // so if we want to update specific things, we can use @Patch
    @Patch('/:id')
    update(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        }
    }


}
