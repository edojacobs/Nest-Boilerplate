import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private userdb: User[] = [
    { id: 1, email: 'john@gmail.com', name: 'John' },
    { id: 2, email: 'ann@gmail.com', name: 'Ann' },
  ];

  create(user: CreateUserDto): User {
    const newUser = { id: 5, ...user };
    this.userdb.push(newUser);
    return newUser;
  }

  findById(id: number): User {
    return this.userdb.find((usr) => {
      if (usr.id === id) return usr;
    });
  }

  findByEmail(email: string): User {
    return this.userdb.find((usr) => {
      if (usr.email === email) return usr;
    });
  }
}
