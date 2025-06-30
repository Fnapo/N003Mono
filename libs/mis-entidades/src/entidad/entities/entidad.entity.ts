import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import e from 'express';
import { Document } from 'mongoose';

@Schema({ collection: 'entidades', timestamps: true })
export class Entidad {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellidos: string;

  // Puedes agregar más propiedades según sea necesario
}

export type EntidadDocument = Entidad & Document;
export const EntidadSchema = SchemaFactory.createForClass(Entidad);
