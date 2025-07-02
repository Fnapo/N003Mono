import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MisEntidadesService } from './mis-entidades.service';
import { EntidadModule } from './entidad/entidad.module';
import { EmasModule } from './emas/emas.module';
import { Entidad, EntidadSchema } from './entidad/entities/entidad.entity';
import { Centro, CentroSchema } from './centros/entities/centro.entity';
import { Ema, EmaSchema } from './emas/entities/ema.entity';

@Module({
  providers: [MisEntidadesService],
  exports: [MisEntidadesService],
  imports: [EntidadModule, EmasModule,
    MongooseModule.forFeature([
      { name: Ema.name, schema: EmaSchema },
      { name: Centro.name, schema: CentroSchema },
      { name: Entidad.name, schema: EntidadSchema },
    ]),],
})

export class MisEntidadesModule { }
