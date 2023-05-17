import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle("Education API")
  .setVersion("1.0")
  .build(); // Сборщик документации?

  const document = SwaggerModule.createDocument(app, config) // Создаем документацию
  SwaggerModule.setup("api_docs", app, document) // Включаем документацию

  // localhost:3000/api_docs

  await app.listen(3000);
  await app.setGlobalPrefix("/api")
}
bootstrap();
