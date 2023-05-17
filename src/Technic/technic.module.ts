import { Module } from "@nestjs/common"
import { TechnicService } from "./technic.service" 
import { TechnicController } from "./technic.controller"
import { DatasourceModule } from "src/datasource/datasource.module"

@Module({
    controllers: [TechnicController],
    providers: [TechnicService],
    imports: [DatasourceModule]
})
export class TechnicModule {}