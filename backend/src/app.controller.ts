import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body.email, body.password);
    return user;
  }

  @Post('login')
  async login(@Body() body: CreateUserDto) {
    const user = await this.authService.login(body.email, body.password);
    return user;
  }
}
