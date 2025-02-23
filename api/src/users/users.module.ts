import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UserController } from './users.controller';
import { UserService } from './users.service';
@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ Register User entity
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
