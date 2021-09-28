import { CreateTaskDTO } from './dtos';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly taskService;
    constructor(taskService: TodoService);
    getAll(): Promise<import("./todo.model").default[]>;
    createNewTask(dto: CreateTaskDTO): Promise<import("./todo.model").default>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
    updateTask(id: number): Promise<import("typeorm").UpdateResult>;
}
