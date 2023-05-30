import { Module } from "@nestjs/common"
import { TechnicService } from "./technic.service" 
import { TechnicController } from "./technic.controller"
import { DatasourceModule } from "src/datasource/datasource.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Product } from "src/Product/product.entity"
import { Technic } from "./technic.entity"

@Module({
    controllers: [TechnicController],
    providers: [TechnicService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Product, Technic]),
    ]
})
export class TechnicModule {}