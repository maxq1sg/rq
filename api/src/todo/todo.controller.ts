import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO } from './dtos';
import { TodoService } from './todo.service';

@Controller('/todos')
export class TodoController {
  constructor(private readonly taskService: TodoService) {}

  @Get('/')
  getAll() {
    return this.taskService.getAll();
  }
  @Post('/')
  createNewTask(@Body() dto: CreateTaskDTO) {
    return this.taskService.createNewTodo(dto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    console.log(id);
    return this.taskService.deleteTask(+id);
  }

  @Put('/:id')
  updateTask(@Param('id') id: number) {
    console.log(id);
    return this.taskService.updateTaskStatus(+id);
  }
}
