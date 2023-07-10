import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    productName: string;
    @Column()
    quantity: number;
    @Column()
    price: number;
    @Column()
    description: string;
  
    @Column({ default: true })
    isActive: boolean;
}
