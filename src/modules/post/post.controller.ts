// post.controller.ts
import { Controller, Post as HttpPost, Param, Body, Delete, Put, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @HttpPost(':userId')
    async createPost(
        @Param('userId') userId: number,
        @Body('postContent') postContent: string,
    ) {
        return this.postService.createPost(userId, postContent);
    }

    @HttpPost(':userId/poll')
    async createPoll(
        @Param('userId') userId: number,
        @Body() postData: Partial<Post>,
    ) {
        return this.postService.createPoll(userId, postData);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: number) {
        return this.postService.deletePost(id);
    }

    @Put(':id/upvote')
    async upvotePost(@Param('id') id: number) {
        return this.postService.upvotePost(id);
    }

    @Put(':id/downvote')
    async downvotePost(@Param('id') id: number) {
        return this.postService.downvotePost(id);
    }

    @Put(':id/vote-poll')
    async votePoll(@Param('id') id: number, @Body('option') option: string) {
        return this.postService.votePoll(id, option);
    }

    @Get()
    async getAllPosts() {
        return this.postService.getAllPosts();
    }
}