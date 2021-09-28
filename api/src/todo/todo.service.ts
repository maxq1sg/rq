import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import wait from 'src/utils/await';
import { Repository } from 'typeorm';
import { CreateTaskDTO } from './dtos';
import Task from './todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getAll() {
    await wait(1000);
    return this.tasksRepository.find({});
  }
  async createNewTodo(dto: CreateTaskDTO) {
    await wait(1000);
    const newTask = this.tasksRepository.create(dto);
    newTask.completed = false;
    return this.tasksRepository.save(newTask);
  }
  async deleteTask(id: number) {
    await wait(1000);
    return this.tasksRepository.delete(id);
  }

  async updateTaskStatus(id: number) {
    await wait(1000);
    return this.tasksRepository
      .createQueryBuilder()
      .update(Task)
      .set({
        completed: () => 'NOT completed',
      })
      .where('id = :id', { id })
      .execute();
  }
}
