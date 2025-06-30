import { Module } from '@nestjs/common';
import { EmasService } from './emas.service';
import { EmasController } from './emas.controller';

@Module({
  controllers: [EmasController],
  providers: [EmasService],
})
export class EmasModule {}
