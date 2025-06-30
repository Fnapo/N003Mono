import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'centros', timestamps: true })
export class Centro {
  @Prop({ required: true })
  nombre: string;
}

export type CentroDocument = Centro & Document;
export const CentroSchema = SchemaFactory.createForClass(Centro);

