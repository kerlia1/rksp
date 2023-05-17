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
    ProductId: number;

    @Column() 
    ProductType: string;

    @Column()
    ProductQuantity: number;

    @ManyToMany((type) => Technic, (technic) => technic.technics) //Создадим связь многие ко многим с сущностью technic и свяжем с полем *type* в технике

    @JoinTable({
        //join таблица с названием product_technic
        name: 'product_technic',
        joinColumn: { name: 'product_type' }, //для связи с идентификатором продукта
        inverseJoinColumn: { name: 'technic_type' }, //для связи с идентификатором техники
    })
    technics : Technic[]; // объект, в котором будем автоматически получать всю технику

    
}
