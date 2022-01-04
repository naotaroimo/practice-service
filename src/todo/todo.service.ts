import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getList(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async add(todo: Todo): Promise<number> {
    const id = Math.floor(Math.random() * 1000);
    return (
      await this.prisma.todo.create({
        data: {
          id: id,
          todo: todo.todo,
          completed: todo.completed,
        },
      })
    ).id;
  }

  async update(todo: Todo): Promise<number> {
    return (
      await this.prisma.todo.update({
        data: {
          todo: todo.todo,
          completed: todo.completed,
        },
        where: {
          id: todo.id,
        },
      })
    ).id;
  }
}
