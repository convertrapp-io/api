import { INestApplication } from '@nestjs/common';

export function appCreate(app: INestApplication): void {
  app.enableCors();
}
