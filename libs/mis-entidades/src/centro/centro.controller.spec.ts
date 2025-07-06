import { Test, TestingModule } from '@nestjs/testing';
import { CentrosController } from './centro.controller';
import { CentrosService } from './centro.service';

describe('CentrosController', () => {
  let controller: CentrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentrosController],
      providers: [CentrosService],
    }).compile();

    controller = module.get<CentrosController>(CentrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
