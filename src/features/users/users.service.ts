import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  lista(): Promise<User[]> {
    return this.usersRepository.find();
  }

  show(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  criar(): Promise<User> {
    const a = new User();
    a.email = 'diogo@jera.com';
    a.name = 'diogo';
    a.password = 'secret';
    return this.usersRepository.save(a);
  }
}
