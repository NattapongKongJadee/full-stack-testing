import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppDataSource } from './config/data-source';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // Rejects unknown properties
      transform: true, // Automatically transforms payloads to DTOs
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('User Management App')
    .setDescription('For partcipant test')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Swagger docs available at http://localhost:${port}/api/docs#/`);
}

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => console.log('Database connection error:', error));

bootstrap();
