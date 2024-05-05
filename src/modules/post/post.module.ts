// post.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { UserService } from '../user/user.service'; // Import UserService here
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Post]), UserModule], // Remove UserService from imports
    controllers: [PostController],
    providers: [PostService, Post], // Add UserService to providers
    exports: [PostService],
})
export class PostModule { }
