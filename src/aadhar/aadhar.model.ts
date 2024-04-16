import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Aadhar extends Model<Aadhar> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  userId?: number;

  @Column
  name: string;

  @Column
  Number: string;
}
