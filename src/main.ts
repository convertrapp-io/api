import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { appCreate } from './app.create';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // All necessary middleware and global pipes can be set up in app.create.ts
  appCreate(app);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('appConfig.port') || 3000;

  await app.listen(port);
}

bootstrap();
