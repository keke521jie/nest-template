import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { AccessToken } from './dto/access-token';
import { Public } from 'src/common/decorator/Public';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  async login(@Body() userDto: UserDto): Promise<string | AccessToken> {
    return await this.userService.login(userDto);
  }
}
