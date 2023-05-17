import { Worker } from "./worker.entity";
import { WorkerService } from "./worker.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"

@Controller ("workers")
export class WorkerController {
    constructor (private readonly workerService : WorkerService) {}

    @Get()
    findAll() {
        return this.workerService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.workerService.findOne(+id);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateWorker: Worker) {
        return this.workerService.update(+id, updateWorker);
    }
    
    @Post()
    create(@Body() createWorker: Worker) {
        return this.workerService.create(createWorker);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workerService.remove(+id);
    }


}
