import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { AdminUserService } from '../admin-user/admin-user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminUserService: AdminUserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(name, pwd) {
    const admin = await this.adminUserService.findByName(name);
    console.log(admin);

    if (!admin) {
      return false;
    }

    const isMatch = await bcrypt.compare(pwd, admin.password);
    console.log(isMatch, pwd);

    if (!isMatch) {
      return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = admin;

    return rest;
  }

  async login(user) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
