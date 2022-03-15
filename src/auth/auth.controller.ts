import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthLogin, AuthService } from './auth.service';

@Controller({ path: 'auth' })
export class AuthController {
  constructor(public readonly service: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() loginDto: AuthLoginDto): Promise<AuthLogin> {
    const user = await this.service.validateLogin(loginDto);
    return this.service.login(user);
  }
}
