import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'user_id',
  })
  id: number;

  @Column({
    name: 'name',
    select: true,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;
}
