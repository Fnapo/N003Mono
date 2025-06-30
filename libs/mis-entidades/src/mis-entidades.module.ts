import { Module } from '@nestjs/common';
import { MisEntidadesService } from './mis-entidades.service';

@Module({
  providers: [MisEntidadesService],
  exports: [MisEntidadesService],
})
export class MisEntidadesModule {}
