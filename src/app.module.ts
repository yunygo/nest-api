import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@nestjs/core';
import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ClientModule,
    AdminModule,
    CoreModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
      {
        path: 'client',
        module: ClientModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
