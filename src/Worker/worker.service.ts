import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from '../datasource/datasource.service';
import { Worker } from "./worker.entity";

@Injectable ()
export class WorkerService {
    constructor (private readonly DatasourceService: DatasourceService) {}

    create(worker: Worker) {
        this.DatasourceService.getWorker().push(worker);
        return worker;
    }
    
    findOne(id: number) {
        return this.DatasourceService
            .getWorker()
            .find((worker) => worker.WorkerId === id);
    }
    
    findAll(): Worker[] {
        return this.DatasourceService.getWorker();
    }
      
    update(id: number, updateWorker: Worker) {
        const index = this.DatasourceService
          .getWorker()
          .findIndex((worker) => worker.WorkerId === id);
        this.DatasourceService.getWorker()[index] = updateWorker;
        return this.DatasourceService.getWorker()[index];
    }
    
    remove(id: number) {
        const index = this.DatasourceService
          .getWorker()
          .findIndex((worker) => worker.WorkerId === id);
        this.DatasourceService.getWorker().splice(index, 1);
        
        return HttpStatus.OK;
    }
}