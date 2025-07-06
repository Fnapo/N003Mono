import { Module } from '@nestjs/common';
import { CentrosService } from './centro.service';
import { CentrosController } from './centro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Centro, CentroSchema } from './entities/centro.entity';

@Module({
  controllers: [CentrosController],
  providers: [CentrosService],
  imports: [MongooseModule.forFeature([
    { name: Centro.name, schema: CentroSchema },])]
})
export class CentrosModule { }
