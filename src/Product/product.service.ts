import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from '../datasource/datasource.service';
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Technic } from "src/Technic/technic.entity";
import { CreateProductDto } from "./DTO/CreateProductDTO";
import { IncompleteProductDto } from "./DTO/incomplete-product.dto";

@Injectable ()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository <Product>,
        @InjectRepository(Technic)
        private readonly technicRepository: Repository <Technic>,
    ) {}

    async create(productDto: CreateProductDto): Promise<Product>
    {
        const product = this.productRepository.create(); //создаем объект Product из репозитория
        product.type = productDto.type;
        product.quantity = productDto.quantity;
        product.brand = productDto.brand;

        const technics = await this.technicRepository.findBy({
            brand: In (productDto.brands),
        });
        product.brands = technics;
        await this.productRepository.save(product);
        return product
    }

    async findAll(): Promise<Product[]> {
        const products = await this.productRepository.find({
          // получаем связанные объекты
          relations: {
            brands: true,
          },
        });
        return products; 
    }

    findOne(id: number): Promise<Product> {
        return this.productRepository.findOne({
          where: { id }, 
          relations: { brands: true }, 
        });
    }

    async findIncomplete(): Promise<IncompleteProductDto[]> {
        const products = await this.productRepository.find(); 

        const incompleteProducts: IncompleteProductDto[] = products.map((product) => {
          const incompleteProduct = new IncompleteProductDto();
          incompleteProduct.type = product.type;
          incompleteProduct.quantity = product.quantity;
          return incompleteProduct;
        });
        return incompleteProducts;
    }

    async update(id: number, updateProduct: Product) {
        const product = await this.productRepository.findOne({ where: { id } });
        
        product.type = updateProduct.type;
        product.quantity = updateProduct.quantity;
        product.brand = updateProduct.brand;
        product.brands = updateProduct.brands;
        
        await this.productRepository.save(product);
        return product;
    }

    remove(id: number) {
        this.productRepository.delete({ id });
    }

}