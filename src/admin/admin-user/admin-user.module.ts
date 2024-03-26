import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserController } from './admin-user.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [AdminUserController],
  providers: [AdminUserService, PrismaClient],
  exports: [AdminUserService],
  imports: [],
})
export class AdminUserModule {}
