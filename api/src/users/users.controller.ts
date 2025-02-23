import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  BadRequestException,
  ValidationPipe,
  ConflictException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/users.dto';
import { UserService } from './users.service';
import { PaginationQueryDto } from './dto/pagination.query.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { validate } from 'class-validator';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('Users') // ✅ Ensure the controller has a Swagger tag
@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly userService: UserService,
  ) {}

  // ✅ Create a new user
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: body.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email is already in use.');
    }

    // ✅ Manually generate UUID and create user
    return await this.userService.createUser(body);
  }

  // ✅ Get all users with optional pagination & sorting
  @Get()
  async getUsers(
    @Query(new ValidationPipe({ transform: true })) query: PaginationQueryDto,
  ) {
    return this.userService.getUsers(
      query.limit,
      query.offset,
      query.sort_direction,
    );
  }

  // ✅ Get a single user by ID
  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new ConflictException(`User ${id} does not exist`);
    }

    return user;
  }

  // ✅ Update a user
  @Put(':id')
  @ApiBody({ type: UpdateUserDto })
  async updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) body: UpdateUserDto, // ✅ Apply validation pipe here
  ) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    // ✅ No need to use plainToInstance manually
    const errors = await validate(body);
    if (errors.length > 0) {
      throw new BadRequestException(
        errors
          .map((err) => Object.values(err.constraints ?? {}))
          .flat()
          .filter(Boolean),
      );
    }

    if (body.email && body.email !== user.email) {
      const existingUser = await this.userService.findByEmail(body.email);
      if (existingUser) {
        throw new ConflictException('Email is already in use.');
      }
    }

    await this.userService.updateUser(id, {
      ...body,
      updated_at: new Date(),
    });

    return { message: `User ${id} updated successfully` };
  }

  // ✅ Delete a user
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`User ${id} not found`);
    return { message: `User ${id} deleted` };
  }

  // ✅ Upload Profile Picture and Save Path in DB
  @Post(':id/profile_picture')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        picture: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['picture'],
    },
  })
  @UseInterceptors(
    FileInterceptor('picture', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          callback(null, `${req.params.id}-${file.originalname}`);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
      fileFilter: (req, file, callback) => {
        if (!['image/jpeg', 'image/png'].includes(file.mimetype)) {
          return callback(
            new BadRequestException(
              'Only jpg, jpeg, and png files are allowed',
            ),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  async uploadProfilePicture(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // Check if file is present
    if (!file) {
      throw new BadRequestException('Picture file is required');
    }

    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User ${id} not found`);

    user.picture = file.filename;
    await this.userRepository.save(user);

    return {
      message: `Profile picture for user ${id} uploaded successfully`,
      file,
    };
  }

  // ✅ Get Profile Picture Path from DB
  @Get(':id/profile_picture')
  async getProfilePicture(@Param('id') id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user || !user.picture)
      throw new NotFoundException(`Profile picture not found for user ${id}`);
    return { profile_picture: `/uploads/${user.picture}` };
  }
}
