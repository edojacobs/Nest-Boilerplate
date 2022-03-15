import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
  @UsePipes(new ValidationPipe())
  create(@Body() body: CreateUserDto): any {
    return this.userService.create(body);
  }
}
