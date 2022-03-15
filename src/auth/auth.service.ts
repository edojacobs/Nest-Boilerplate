import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/user.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthLoginDto } from './dto/auth-login.dto';

export interface AuthLogin {
  token: string;
  user: UserEntity;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserEntity): Promise<AuthLogin> {
    const payload = { email: user.email, id: user.id };
    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }

  async validateLogin(userDto: AuthLoginDto): Promise<UserEntity> {
    return this.userService.findWithCredentials(
      userDto.email,
      userDto.password,
    );
  }
}
