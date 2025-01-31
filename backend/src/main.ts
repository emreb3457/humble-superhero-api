import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());

  const documentConfig = new DocumentBuilder()
    .setTitle('Superhero App')
    .setDescription('Building a Humble Superhero API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);

}
bootstrap();
