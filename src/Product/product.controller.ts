import { CreateProductDto } from "./DTO/CreateProductDTO";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"

@Controller ("products")
export class ProductController {
    constructor (private readonly productService : ProductService) {}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get('incomplete')
    findIncomplete() {
        this.productService.findIncomplete();
      }

    
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.findOne(+id);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProduct: Product) {
        return this.productService.update(+id, updateProduct);
    }
    
    @Post()
    create(@Body() createProduct: CreateProductDto) {
        return this.productService.create(createProduct);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }


}
