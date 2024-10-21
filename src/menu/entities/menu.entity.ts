import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    menuId: number;

    @Column({unique:true})
    itemName: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    description: string;
}
