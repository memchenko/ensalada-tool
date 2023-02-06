import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Categories, SubCategories } from './types';

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

  @Column({ type: 'varchar', array: true, nullable: true })
  subCategories: SubCategories[];

  @Column({ type: 'varchar', array: true, nullable: true })
  photos: string[];

  @Column({ type: 'numeric' })
  latitude: number;

  @Column({ type: 'numeric' })
  longitude: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
