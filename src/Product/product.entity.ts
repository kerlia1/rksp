import { Technic } from 'src/Technic/technic.entity'
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
@Entity('products') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Product{

    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    type: string;

    @Column()
    quantity: number;

    @Column()
    brand: number;

    @ManyToMany((type) => Technic, (technic) => technic.brands) //Создадим связь многие ко многим с сущностью technic и свяжем с полем *type* в технике

    @JoinTable({
        //join таблица с названием product_technic
        name: 'product_technic',
        joinColumn: { name: 'product_brand' }, //для связи с идентификатором продукта
        inverseJoinColumn: { name: 'technic_brand' }, //для связи с идентификатором техники
    })
    brands : Technic[]; // объект, в котором будем автоматически получать бренды техники

}
