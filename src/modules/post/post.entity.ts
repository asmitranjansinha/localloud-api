// post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    postContent: string;

    @Column({ default: 0 })
    upvotes: number;

    @Column({ default: 0 })
    downvotes: number;

    @ManyToOne(() => User, user => user.posts)
    user: User;
}
