import { Module } from '@nestjs/common';
import { MisEntidadesService } from './mis-entidades.service';
import { EntidadModule } from './entidad/entidad.module';

@Module({
  providers: [MisEntidadesService],
  exports: [MisEntidadesService],
  imports: [EntidadModule],
})
export class MisEntidadesModule {}
