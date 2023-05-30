import { CreateTechnicDto } from "./DTO/CreateTechnicDTO";
import { Technic } from "./technic.entity";
import { TechnicService } from "./technic.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"

@Controller ("technics")
export class TechnicController {
    constructor (private readonly technicService : TechnicService) {}

    @Get()
    findAll() {
        return this.technicService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.technicService.findOne(+id);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateTechnic: Technic) {
        return this.technicService.update(+id, updateTechnic);
    }
    
    @Post()
    create(@Body() createTechnic: CreateTechnicDto) {
        return this.technicService.create(createTechnic);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.technicService.remove(+id);
    }


}
