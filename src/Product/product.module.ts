import { Module } from "@nestjs/common"
import { ProductService } from "./product.service" 
import { ProductController } from "./product.controller"
import { DatasourceModule } from "src/datasource/datasource.module"

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    imports: [DatasourceModule]
})
export class ProductModule {}