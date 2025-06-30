import { PartialType } from '@nestjs/mapped-types';
import { CreateEmaDto } from './create-ema.dto';

export class UpdateEmaDto extends PartialType(CreateEmaDto) {}
