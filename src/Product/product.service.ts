import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from '../datasource/datasource.service';
import { Product } from "./product.entity";
import { PassThrough } from "stream";

@Injectable ()
export class ProductService {
    constructor (private readonly DatasourceService: DatasourceService) {}

    create(product: Product) {
        this.DatasourceService.getProduct().push(product);
        return product;
    }
    
    findOne(id: number) {
        return this.DatasourceService
            .getProduct()
            .find((product) => product.ProductId === id);
    }
    
    findAll(): Product[] {
        return this.DatasourceService.getProduct();
    }
      
    update(id: number, updateProduct: Product) {
        const index = this.DatasourceService
          .getProduct()
          .findIndex((product) => product.ProductId === id);
        this.DatasourceService.getProduct()[index] = updateProduct;
        return this.DatasourceService.getProduct()[index];
    }
    
    remove(id: number) {
        const index = this.DatasourceService
          .getProduct()
          .findIndex((product) => product.ProductId === id);
        this.DatasourceService.getProduct().splice(index, 1);
        
        return HttpStatus.OK;
    }

    findIncomplete(){
        
    }

}