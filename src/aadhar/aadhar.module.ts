import { Module } from '@nestjs/common';
import { AadharService } from './aadhar.service';
import { AadharController } from './aadhar.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Aadhar } from './aadhar.model';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, SequelizeModule.forFeature([Aadhar])],
  providers: [AadharService],
  controllers: [AadharController],
})
export class AadharModule {}
