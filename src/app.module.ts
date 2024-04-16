import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AadharModule } from './aadhar/aadhar.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '61232332',
      database: 'nest',
      autoLoadModels: true,
      synchronize: true,
    }),
    TasksModule,
    UserModule,
    AadharModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
