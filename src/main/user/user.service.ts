import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from './dto/access-token';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(userDto: UserDto): Promise<string | AccessToken> {
    const { username, password } = userDto;
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) return '用户不存在';
    if (user.password !== password) return '账号或密码错误';
    const payload = { sub: user.id, username: user.username };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
