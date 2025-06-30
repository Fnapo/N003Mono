import { Test, TestingModule } from '@nestjs/testing';
import { MisEntidadesService } from './mis-entidades.service';

describe('MisEntidadesService', () => {
  let service: MisEntidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MisEntidadesService],
    }).compile();

    service = module.get<MisEntidadesService>(MisEntidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
