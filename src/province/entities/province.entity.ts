import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Province {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    constructor(province: Partial<Province>){
        Object.assign(this, province);
    }
}
