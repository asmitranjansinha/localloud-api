// post.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        private readonly userService: UserService,
    ) { }

    async createPost(userId: number, postContent: string): Promise<Post> {
        const user = await this.userService.findById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const post = this.postRepository.create({ postContent, user });
        return this.postRepository.save(post);
    }

    async deletePost(id: number): Promise<void> {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        await this.postRepository.delete(id);
    }

    async upvotePost(id: number): Promise<Post> {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        post.upvotes++;
        return this.postRepository.save(post);
    }

    async downvotePost(id: number): Promise<Post> {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        post.downvotes++;
        return this.postRepository.save(post);
    }

    async getAllPosts(): Promise<Post[]> {
        return this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .select(['post.id', 'post.postContent', 'post.upvotes', 'post.downvotes', 'user.id', 'user.name', 'user.username'])
            .getMany();
    }
}