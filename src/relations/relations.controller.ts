import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { CreateRelationDto } from './dto/create-relation.dto';

@Controller('relations')
export class RelationsController {
  constructor(private readonly relationsService: RelationsService) {}

  @Post()
  create(@Body() createRelationDto: CreateRelationDto) {
    return this.relationsService.create(createRelationDto);
  }

  @Get()
  findAll() {
    return this.relationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationDto: CreateRelationDto) {
    return this.relationsService.update(+id, updateRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationsService.remove(+id);
  }
}
