import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userData: User): Promise<User> {
    return this.userService.create(userData);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() productData,
  ): Promise<[number, User[]]> {
    return this.userService.update(Number(id), productData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.userService.remove(Number(id));
  }
}
