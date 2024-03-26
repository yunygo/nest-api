import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as ConfigModuleNest } from '@nestjs/config';

@Module({
  imports: [
    ConfigModuleNest.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
})
export class ConfigModule {}
