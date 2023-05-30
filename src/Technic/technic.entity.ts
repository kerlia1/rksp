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
    type: string;

    @Column()
    name: string;

    @Column()
    specialization: string;

    @Column()
    brand : number;

    @ManyToMany((type) => Product, (product) => product.brands)

    @JoinTable({
        name: 'product_technic',
        joinColumn: { name: 'technic_brand' },
        inverseJoinColumn: { name: 'product_brand' },
      })
    brands: Product[];
}
/* Example

{
"TechnicId": 0,
"TechnicName": "Техника какая-то",
"TechnicQuantity": 10
}

*/