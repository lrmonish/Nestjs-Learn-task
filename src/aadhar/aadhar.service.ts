import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Aadhar } from './aadhar.model';
import { User } from 'src/user/user.model';

@Injectable()
export class AadharService {
  constructor(
    @InjectModel(Aadhar) private aadharModel: typeof Aadhar,
    // @InjectModel(User) private userModel: typeof User,
  ) {}

  async create(aadharData: Aadhar, userId: number): Promise<Aadhar> {
    // const user = await this.userModel.findOne({ where: { id: userId } });
    const aadhar = await new Aadhar(aadharData).save();

    return aadhar;
  }
}
