import { Product } from "src/Product/product.entity";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('technics')
export class Technic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TechnicType: string;

    @Column()
    TechnicName: string;

    @Column()
    specialization: string;



    @ManyToMany((type) => Product, (product) => product.technics)

    @JoinTable({
        name: 'product_technic',
        joinColumn: { name: 'technic_type' },
        inverseJoinColumn: { name: 'product_type' },
      })
    technics: Technic[];
}
/* Example

{
"TechnicId": 0,
"TechnicName": "Техника какая-то",
"TechnicQuantity": 10
}

*/