import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders: 'X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept'
  })
  await app.listen(3000);
}
bootstrap();
