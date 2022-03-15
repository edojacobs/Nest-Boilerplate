import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { UserOrm } from 'src/database/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([UserOrm])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
