import { Test, TestingModule } from '@nestjs/testing';
import { EmasController } from './ema.controller';
import { EmasService } from './ema.service';

describe('EmasController', () => {
  let controller: EmasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmasController],
      providers: [EmasService],
    }).compile();

    controller = module.get<EmasController>(EmasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
