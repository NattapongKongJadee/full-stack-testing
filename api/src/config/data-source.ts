import { DataSource } from 'typeorm';
import { User } from '../users/users.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1', // ✅ Ensure it's the correct host
  port: 5433, // ✅ Ensure it's the correct port from docker-compose
  username: 'postgres',
  password: 'postgres',
  database: 'user_dev',
  entities: [User],
  synchronize: false, // ✅ Set to false if using migrations
  migrations: ['dist/migrations/*.js'],
  migrationsRun: true,
});
