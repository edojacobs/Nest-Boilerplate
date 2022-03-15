import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserOrm } from 'src/database/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserOrm)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ id });
  }

  async create(user: CreateUserDto): Promise<void> {
    const newUser = this.userRepository.create(user);
    const passwordHash = await bcrypt.hash(user.password, 10);

    this.userRepository.save({
      name: newUser.email,
      email: newUser.email,
      password: passwordHash,
    });
  }
}
