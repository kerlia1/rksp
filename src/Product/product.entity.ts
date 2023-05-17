import { Technic } from 'src/Technic/technic.entity'
//import { Affiliation } from 'src/affiliations/entities/affiliation.entity';

import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('products') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Product{
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    ProductId: number;

    @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    ProductType: string;

    @Column({})
    ProductQuantity: number;

    //ProductId: number;
    //ProductName: string;
    //ProductQuantity: number;

    @ManyToMany((type) => Technic, (technic) => technic.technics) //Создадим связь многие ко многим с сущностью technic и свяжем с полем *type* в технике

    @JoinTable({
        //join таблица с названием product_technic
        name: 'product_technic',
        joinColumn: { name: 'product_id' }, //для связи с идентификатором продукта
        inverseJoinColumn: { name: 'technic_id' }, //для связи с идентификатором техники
    })
    technics : Technic[]; // объект, в котором будем автоматически получать всю технику

    
}

/* Example

{
"ProductId": 0,
"ProductName": "Что-то",
"ProductQuantity": 10
}

*/