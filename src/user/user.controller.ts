import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller({ path: 'user' })
export class UserController {
  private readonly logger = new Logger();

  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {
    this.logger.log(this.configService.get('DATABASE_USER'));
  }

  @Get('get/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string): any {
    return this.userService.findById(Number(id));
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  create(@Body() body: any): any {
    return this.userService.create(body);
  }
}
