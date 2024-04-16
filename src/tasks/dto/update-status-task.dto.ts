import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateStatusTask {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
