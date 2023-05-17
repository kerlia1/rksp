import { Module } from "@nestjs/common"
import { WorkerService } from "./worker.service" 
import { WorkerController } from "./worker.controller"
import { DatasourceModule } from "src/datasource/datasource.module"

@Module({
    controllers: [WorkerController],
    providers: [WorkerService],
    imports: [DatasourceModule]
})
export class WorkerModule {}