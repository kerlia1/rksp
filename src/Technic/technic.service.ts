import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from '../datasource/datasource.service';
import { Technic } from "./technic.entity";

@Injectable ()
export class TechnicService {
    constructor (private readonly DatasourceService: DatasourceService) {}

    create(technic: Technic) {
        this.DatasourceService.getTechnic().push(technic);
        return technic;
    }
    
    findOne(id: number) {
        return this.DatasourceService
            .getTechnic()
            .find((technic) => technic.TechnicId === id);
    }
    
    findAll(): Technic[] {
        return this.DatasourceService.getTechnic();
    }
      
    update(id: number, updateTechnic: Technic) {
        const index = this.DatasourceService
          .getTechnic()
          .findIndex((technic) => technic.TechnicId === id);
        this.DatasourceService.getTechnic()[index] = updateTechnic;
        return this.DatasourceService.getTechnic()[index];
    }
    
    remove(id: number) {
        const index = this.DatasourceService
          .getTechnic()
          .findIndex((technic) => technic.TechnicId === id);
        this.DatasourceService.getTechnic().splice(index, 1);
        
        return HttpStatus.OK;
    }
}