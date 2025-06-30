import { Module } from '@nestjs/common';
import { MisEntidadesService } from './mis-entidades.service';
import { EntidadModule } from './entidad/entidad.module';
import { EmasModule } from './emas/emas.module';

@Module({
  providers: [MisEntidadesService],
  exports: [MisEntidadesService],
  imports: [EntidadModule, EmasModule],
})
export class MisEntidadesModule {}
