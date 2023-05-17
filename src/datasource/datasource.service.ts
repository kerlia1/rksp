import { Injectable } from '@nestjs/common';
import { Product } from 'src/Product/product.entity';
import { Technic } from 'src/Technic/technic.entity';
import { Worker } from 'src/Worker/worker.entity';

@Injectable()
export class DatasourceService {
  private products: Product[] = [];
  private workers: Worker[] = [];
  private technics: Technic[] = [];
  
  getProduct(): Product[] {
    return this.products;
  }

  getTechnic() : Technic[]{
    return this.technics;
  }
  
  getWorker() : Worker[]{
    return this.workers;
  }

}