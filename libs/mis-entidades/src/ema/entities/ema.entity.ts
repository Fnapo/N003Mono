import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

@Schema({ collection: 'emas', timestamps: true })
export class Ema {
  @Prop({ required: true })
  nombre: string;
  @Prop({ required: false, default: [], ref: 'centros' })
  centros: [ObjectId]
}

export type EmaDocument = Ema & Document;
export const EmaSchema = SchemaFactory.createForClass(Ema);
