import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export default class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  completed: boolean;
}
