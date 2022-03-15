import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';

@Controller({ path: 'user' })
export class UserController {
  constructor(private readonly userService: UsersService) {}

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
