import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getList(): Promise<Todo[]> {
    return await this.todoService.getList();
  }

  @Post()
  async add(@Body('param') param: Todo): Promise<number> {
    return await this.todoService.add(param);
  }

  @Put()
  async update(@Body('param') param: Todo): Promise<number> {
    return await this.todoService.update(param);
  }
}
