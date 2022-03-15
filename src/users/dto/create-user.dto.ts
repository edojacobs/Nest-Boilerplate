import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({
    type: 'string',
    description: 'user name',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'user email/username',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'user email/username',
  })
  password: string;
}
