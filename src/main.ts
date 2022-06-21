import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist -nesse caso garantimos que o DTO vai receber apenas o que se espera
      // forbidNonWhitelisted - não permite ser enviada uma propriedade que não existe
      // transform - tipa automaticamente o objeto enviado com o DTO
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(5050);
}
bootstrap();
