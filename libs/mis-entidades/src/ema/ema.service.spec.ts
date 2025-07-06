import { Test, TestingModule } from '@nestjs/testing';
import { EmasService } from './emas.service';

describe('EmasService', () => {
  let service: EmasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmasService],
    }).compile();

    service = module.get<EmasService>(EmasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
