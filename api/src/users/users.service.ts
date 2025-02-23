import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: Partial<User>) {
    const newUser = this.userRepository.create({
      id: uuid(),
      ...userData,
    });

    return this.userRepository.save(newUser);
  }

  async getUsers(
    limit?: number,
    offset?: number,
    sortDirection: 'asc' | 'desc' = 'asc',
  ) {
    const finalLimit =
      limit !== undefined ? Math.max(0, Math.min(limit, 100)) : 10;

    const finalOffset = offset !== undefined ? Math.max(0, offset) : 0;

    if (sortDirection !== 'asc' && sortDirection !== 'desc') {
      throw new BadRequestException('Sort direction must be "asc" or "desc".');
    }

    return await this.userRepository.find({
      take: finalLimit,
      skip: finalOffset,
      order: { created_at: sortDirection.toUpperCase() as 'ASC' | 'DESC' },
    });
  }

  async findOne(id: string): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      return user ?? null;
    } catch (error) {
      console.error(`Error finding user with ID ${id}:`, error);
      return null;
    }
  }

  async getUserById(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async updateUser(id: string, updateData: Partial<User>) {
    await this.userRepository.update(id, updateData);
    return { message: `User ${id} updated successfully` };
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
    return { message: `User ${id} deleted successfully` };
  }
}
