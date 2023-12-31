import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type : VersioningType.URI
  })
  const config = new DocumentBuilder()
    .setTitle('Nda Tau')
    .setDescription('Deskripsinya sih Belajar ya')
    .setVersion('1.0')
    .addTag('3')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
