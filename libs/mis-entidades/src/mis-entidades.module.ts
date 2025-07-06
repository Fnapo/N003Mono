import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MisEntidadesService } from './mis-entidades.service';
import { EntidadModule } from './entidad/entidad.module';
import { EmasModule } from './ema/ema.module';
import { Entidad, EntidadSchema } from './entidad/entities/entidad.entity';
import { Centro, CentroSchema } from './centro/entities/centro.entity';
import { Ema, EmaSchema } from './ema/entities/ema.entity';
import { EntidadService } from './entidad/entidad.service';
import { EmasService } from './ema/ema.service';
import { EntidadController } from './entidad/entidad.controller';
import { EmasController } from './ema/ema.controller';
import { CentrosModule } from './centro/centro.module';

@Module({
  controllers: [],
  providers: [MisEntidadesService,],
  exports: [MisEntidadesService,],
  imports: [EntidadModule,
    CentrosModule,
    EmasModule,]
})

export class MisEntidadesModule { }
