import { Module } from '@nestjs/common';
import { EmasService } from './ema.service';
import { EmasController } from './ema.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ema, EmaSchema } from './entities/ema.entity';

@Module({
  controllers: [EmasController],
  providers: [EmasService],
  imports: [MongooseModule.forFeature([{ name: Ema.name, schema: EmaSchema }])],
})
export class EmasModule { }
