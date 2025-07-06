import { Injectable } from '@nestjs/common';
import { CreateEmaDto } from './dto/create-ema.dto';
import { UpdateEmaDto } from './dto/update-ema.dto';

@Injectable()
export class EmasService {
  create(createEmaDto: CreateEmaDto) {
    return 'This action adds a new ema';
  }

  findAll() {
    return `This action returns all emas`;
  }

  findOne(id: string) {
    return `This action returns a #${id} ema`;
  }

  update(id: string, updateEmaDto: UpdateEmaDto) {
    return `This action updates a #${id} ema`;
  }

  remove(id: string) {
    return `This action removes a #${id} ema`;
  }
}
