import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { appCreate } from './app.create';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // All necessary middleware and global pipes can be set up in app.create.ts
  appCreate(app);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('appConfig.port') || 3000;

  await app.listen(port);
}

bootstrap();
