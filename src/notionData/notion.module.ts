import { Module } from '@nestjs/common';
import { NotionController } from './notion.controller';
import { NotionService } from './notion.service';
// @ it is called decorator, NestJs lives with decorator

@Module({
 
  controllers: [NotionController],
  providers: [NotionService],
})
export class NotionModule { }

// controller take url and execute funtion.
// url을 가지고 오고, 함수를 실행한다. 

