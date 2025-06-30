import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'emas', timestamps: true })
export class Ema {
  @Prop({ required: true })
  nombre: string;
}

export type EmaDocument = Ema & Document;
export const EmaSchema = SchemaFactory.createForClass(Ema);
