import { Controller, Param, Post, Body } from '@nestjs/common';
import { AadharService } from './aadhar.service';
import { Aadhar } from './aadhar.model';

@Controller('aadhar')
export class AadharController {
  constructor(private aadharService: AadharService) {}

  @Post(':id')
  create(
    @Param('id') id: number,
    @Body() createAadhar: Aadhar,
  ): Promise<Aadhar> {
    return this.aadharService.create(createAadhar, id);
  }
}
