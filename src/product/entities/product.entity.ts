import { Category } from 'src/category/entities/category.entity';
import { Rating } from 'src/rating/entities/rating.entity';
import { Variation } from 'src/variation/entities/variation.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  /** Relations */
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Rating, (rating) => rating.product)
  ratings: Rating[];

  @ManyToOne(() => Variation, (variation) => variation.product)
  variations: Variation[];

  /** Entity Columns */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: true })
  discount: number;

  @Column({ nullable: true })
  discountInPercent: string;

  @Column()
  sku: string;

  @Column({ default: false })
  is_active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
}
