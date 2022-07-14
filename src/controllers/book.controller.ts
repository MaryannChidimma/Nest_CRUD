
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "src/schemas/book.schema";
import { BookService } from "src/services/book.service";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService){}

@Post()
async createBook( @Body() book: Book) {
const newBook = await this.bookService.create(book)
 return {message: "Resource is created Successfully", data: newBook}
}

@Get()
async fetchAll() {
const books = await this.bookService.readAll();
return {message: "Resource gotten successfully", data: books}
}

@Get('/:id')
async findById( @Param('id') id) {
const book = await this.bookService.readById(id);
  return {message: "Resource gotten successfully", data: book}
}

@Put('/:id')
async update( @Param('id') id, @Body() book: Book) {
const updatedBook = await this.bookService.update(id, book);
return {message: "Resource is successfully Updated", data: updatedBook}
}

@Delete('/:id')
async delete( @Param('id') id) {
const deletedBook = await this.bookService.delete(id);
  return { message: "Resource is successfully Deleted", data: deletedBook}
}
}