import { Repository } from 'typeorm';
import { CreateTaskDTO } from './dtos';
import Task from './todo.model';
export declare class TodoService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    getAll(): Promise<Task[]>;
    createNewTodo(dto: CreateTaskDTO): Promise<Task>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
    updateTaskStatus(id: number): Promise<import("typeorm").UpdateResult>;
}
