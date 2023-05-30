import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from '../datasource/datasource.service';
import { Technic } from "./technic.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { IncompleteProductDto } from "src/Product/DTO/incomplete-product.dto";
import { Product } from "src/Product/product.entity";
import { Repository, In } from "typeorm";
import { CreateTechnicDto } from "./DTO/CreateTechnicDTO";
import { IncompleteTechnicDto } from "./DTO/incomplete-technic.dto";

@Injectable ()
export class TechnicService {
    constructor(
        @InjectRepository(Technic)
        private readonly technicRepository: Repository <Technic>, 
        @InjectRepository(Product)
        private readonly productRepository: Repository <Product>,
    ) {}

    async create(technicDto: CreateTechnicDto): Promise<Technic>
    {
        const technic = this.technicRepository.create(); //создаем объект Product из репозитория
        technic.type = technicDto.type;
        technic.name = technicDto.name;
        technic.specialization = technicDto.specialization;
        technic.brand = technicDto.brand;
        

        const products = await this.productRepository.findBy({
            brand: In (technicDto.brands),
        });
        technic.brands = products;
        await this.technicRepository.save(technic);
        return technic
    }

    async findAll(): Promise<Technic[]> {
        const technics = await this.technicRepository.find({
          // получаем связанные объекты
          relations: {
            brands: true,
          },
        });
        return technics; 
    }

    findOne(id: number): Promise<Technic> {
        return this.technicRepository.findOne({
          where: { id }, 
          relations: { brands: true }, 
        });
    }

    async findIncomplete(): Promise<IncompleteTechnicDto[]> {
        const technics = await this.technicRepository.find(); 

        const incompleteTechnics : IncompleteTechnicDto[] = technics.map((technic) => {
          const incompleteTechnic = new IncompleteTechnicDto();
          incompleteTechnic.name = technic.name;
          incompleteTechnic.type = technic.type;
          incompleteTechnic.specialization = technic.specialization;
          incompleteTechnic.brand = technic.brand;
          return incompleteTechnic;
        });
        return incompleteTechnics;
    }

    async update(id: number, updateTechnic: Technic) {
        const technic = await this.technicRepository.findOne({ where: { id } });
        
        technic.type = updateTechnic.type;
        technic.name = updateTechnic.name;
        technic.specialization = updateTechnic.specialization;
        technic.brand = updateTechnic.brand;
        
        technic.brands = updateTechnic.brands;
        
        await this.technicRepository.save(technic);
        return technic;
    }

    remove(id: number) {
        this.technicRepository.delete({ id });
    }
}