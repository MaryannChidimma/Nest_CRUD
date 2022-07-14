import { Module } from '@nestjs/common';
import {MongooseModule } from '@nestjs/mongoose'
import { Book, BookSchema } from './schemas/book.schema';
import { BookController } from './controllers/book.controller';
import { BookService } from './services/book.service';



@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/store'), 
  MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
  controllers: [ BookController],
  providers: [ BookService],
})
export class AppModule {}
