import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTask } from './dto/create-task.dto';
import { UpdateTask } from './dto/update-task.dto';
import { SearchTask } from './dto/search-tasks.dto';
import { Todo } from '../../models';

@Injectable()
export class TasksService {
  constructor() {}

  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  async getTasksOfSeed() {
    console.log(Todo);

    return await Todo.findAll();
  }
  searchTasks(searchQuery: SearchTask): Task[] {
    const { status, description } = searchQuery;
    let tempTasks = this.getAllTasks();

    if (status) {
      tempTasks = tempTasks.filter((task) => task.status === status);
    }

    if (description) {
      tempTasks = tempTasks.filter((task) => {
        if (task.description.includes(description)) {
          return true;
        }
        return false;
      });
    }

    return tempTasks;
  }

  createTask(createTask: CreateTask): Task[] {
    const { title, description } = createTask;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return this.tasks;
  }

  getTaskById(id: string) {
    let found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task With Id ${id} Not Found`);
    }

    return found;
  }

  deleteTaskById(id: string) {
    return (this.tasks = this.tasks.filter((task) => task.id !== id));
  }

  updateTaskById(id: string, status: any, description: any) {
    // const { description, status } = updateTask;
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, description, status };
      }
      return task;
    });
  }
}
