import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Education extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  title: string;

  @Column
  start_time: Date;

  @Column
  end_time: number;

  @Column
  position: string;

  @Column
  faculty: number;

  @Column
  description: string;

  @Column
  is_active: boolean;
}
