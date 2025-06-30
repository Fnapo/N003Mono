import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmasService } from './emas.service';
import { CreateEmaDto } from './dto/create-ema.dto';
import { UpdateEmaDto } from './dto/update-ema.dto';

@Controller('emas')
export class EmasController {
  constructor(private readonly emasService: EmasService) {}

  @Post()
  create(@Body() createEmaDto: CreateEmaDto) {
    return this.emasService.create(createEmaDto);
  }

  @Get()
  findAll() {
    return this.emasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmaDto: UpdateEmaDto) {
    return this.emasService.update(+id, updateEmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emasService.remove(+id);
  }
}
