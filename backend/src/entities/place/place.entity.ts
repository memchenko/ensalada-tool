import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Categories } from './types';

@Entity({ name: 'place' })
export class Place {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  // tg name
  @Column({ type: 'varchar', nullable: true })
  author: string | null;

  @Column({ type: 'varchar', array: true })
  categories: Categories[];

  @Column({ type: 'numeric' })
  latitude: number;

  @Column({ type: 'numeric' })
  longitude: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
