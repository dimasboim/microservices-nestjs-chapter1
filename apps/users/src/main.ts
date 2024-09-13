import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule, {
  transport : Transport.TCP,
  options:{
    port: 3001
  }
    });
      //create(UsersModule);
  await app.listen();
}
bootstrap();
