import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    const saltWithHash = user.password;
    const [salt, storedHash] = saltWithHash.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (hash.toString('hex') !== storedHash) {
      throw new BadRequestException('Invalid email or password');
    }

    return {
      id: user.id,
      email: user.email,
    };
  }

  async register(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      throw new BadRequestException('Email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const hashAndSalt = salt + '.' + hash.toString('hex');

    const newUser = await this.usersService.create({
      email,
      password: hashAndSalt,
    });

    return {
      id: newUser.id,
      email: newUser.email,
    };
  }
}
