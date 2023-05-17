import { Module } from "@nestjs/common"
import { ProductService } from "./product.service" 
import { ProductController } from "./product.controller"
import { DatasourceModule } from "src/datasource/datasource.module"
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technic } from "src/Technic/technic.entity";
import { Product } from "./product.entity";

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Product, Technic]),
    ]
})
export class ProductModule {}