import { DataSource } from 'typeorm';
import { User } from '../users/users.entity';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'user_dev',
  entities: [User],
  synchronize: false,
  migrations: ['dist/migrations/*.js'],
  migrationsRun: true,
});
