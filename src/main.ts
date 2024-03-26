import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .enableVersioning({
      defaultVersion: '1',
      type: VersioningType.URI,
    })
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
  await app.listen(3000);
}
bootstrap();
