import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import envValidations from './config/env.validations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
      validationSchema: envValidations,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
