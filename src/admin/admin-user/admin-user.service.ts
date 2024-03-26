import { Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { PrismaClient } from '@prisma/client';
import { log } from 'console';

@Injectable()
export class AdminUserService {
  constructor(private readonly prisma: PrismaClient) {}

  async findByName(name: string) {
    return await this.prisma.admin.findFirst({
      where: {
        name: name,
      },
    });
  }

  create(createAdminUserDto: CreateAdminUserDto) {
    return 'This action adds a new adminUser';
  }

  findAll() {
    return `This action returns all adminUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminUser`;
  }

  update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    return `This action updates a #${id} adminUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminUser`;
  }
}
