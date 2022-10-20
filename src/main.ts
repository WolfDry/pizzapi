import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Acitvation de la validation
  app.useGlobalPipes(new ValidationPipe());

  //Activation du swagger
  const config = new DocumentBuilder()
    .setTitle('PIZZAPI api')
    .setDescription('The pizza API description')
    .setVersion('1.0')
    .addTag('pizza')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  //Ecoute du port
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
