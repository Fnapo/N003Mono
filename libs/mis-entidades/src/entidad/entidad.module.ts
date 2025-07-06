/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EntidadService } from './entidad.service';
import { EntidadController } from './entidad.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Entidad, EntidadSchema } from './entities/entidad.entity';

@Module({
  controllers: [EntidadController],
  providers: [EntidadService],
  imports: [MongooseModule.forFeature([
    { name: Entidad.name, schema: EntidadSchema },
  ]),]
})
export class EntidadModule { }
