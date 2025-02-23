import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppDataSource } from './config/data-source'; // Import the data-source

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(AppDataSource.options), // Use config from data-source.ts
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
