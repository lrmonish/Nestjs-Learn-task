import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(userData: User): Promise<User> {
    const user = new User(userData);
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }

  async update(id: number, productData: User): Promise<[number, User[]]> {
    const [affectedCount, affectedRows] = await this.userModel.update(
      productData,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as User[]];
  }

  async remove(id: number): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }
}
