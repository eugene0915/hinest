import { Controller, Get, Param, Post, Delete, Put, Patch, Body, Query } from '@nestjs/common';
import { NotionService } from './notion.service';

@Controller('notion')
// this part controll our entry point of url 
// if removes 'movies' and stays empty, url will be localhost:3000
// if add 'movies' and url will be localhost:3000/movies
export class NotionController {

    constructor(private readonly notionService:NotionService ) { }

    @Get()
    getAll() {
        // return "this will return all movies"
        return this.notionService.getAll()
    }
    
    
    @Get('/token')
    getToken(){
        return this.notionService.getToken()
    }

    @Get('/getdata')
    getData(){
        return this.notionService.getdata()
    }


}
