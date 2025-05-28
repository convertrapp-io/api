import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appCreate } from './app.create';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // All necessary middleware and global pipes can be set up in app.create.ts
  appCreate(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
