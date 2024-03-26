import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminUserModule } from './admin-user/admin-user.module';

@Module({
  imports: [AuthModule, AdminUserModule],
})
export class AdminModule {}
