import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phoneNumber: number;
}
