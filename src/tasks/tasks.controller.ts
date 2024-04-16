import {
  Body,
  Query,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { Task } from './task.model';
import { CreateTask } from './dto/create-task.dto';
import { UpdateTask } from './dto/update-task.dto';
import { SearchTask } from './dto/search-tasks.dto';
import { UpdateStatusTask } from './dto/update-status-task.dto';
// import model from '../../models';
// const model = require('../../models');

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() searchQuery: SearchTask) {
    if (Object.keys(searchQuery).length) {
      return this.tasksService.searchTasks(searchQuery);
    } else {
      // console.log(model.Task);

      return this.tasksService.getAllTasks();
    }
  }

  @Get('/find')
  getTasksOfSeed() {
    return this.tasksService.getTasksOfSeed();
  }

  @Post()
  cerateTask(@Body() createTaskDto: CreateTask) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') delId: string) {
    return this.tasksService.deleteTaskById(delId);
  }

  @Put('/:id')
  updateTaskById(@Param('id') upId: string, @Body() updateTask) {
    const { status }: UpdateStatusTask = updateTask;
    const { description }: UpdateTask = updateTask;

    return this.tasksService.updateTaskById(upId, status, description);
  }
}
