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

  async create(user: CreateUserDto): Promise<void> {
    const newUser = this.userRepository.create(user);
    const passwordHash = await bcrypt.hash(user.password, 10);

    this.userRepository.save({
      name: newUser.email,
      email: newUser.email,
      password: passwordHash,
    });
  }

  findById(id: number): Promise<UserEntity> {
    return this.userRepository
      .createQueryBuilder('u')
      .where('u.id = :id', { id })
      .select(['u.id', 'u.email', 'u.name'])
      .getOne();
  }

  findWithCredentials(email: string, password: string): Promise<UserEntity> {
    return this.userRepository
      .createQueryBuilder('u')
      .where('u.email = :email and u.password = :password', { email, password })
      .select(['u.id', 'u.email', 'u.name'])
      .getOne();
  }
}
