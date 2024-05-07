// post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    postContent: string;

    @Column({ default: false })
    isPoll: boolean;

    @Column({ default: "" })
    pollA: string;

    @Column({ default: "" })
    pollB: string;

    @Column({ default: "" })
    pollC: string;

    @Column({ default: "" })
    pollD: string;

    @Column({ default: 0 })
    pollAVotes: number;

    @Column({ default: 0 })
    pollBVotes: number;

    @Column({ default: 0 })
    pollCVotes: number;

    @Column({ default: 0 })
    pollDVotes: number;

    @Column({ default: 0 })
    upvotes: number;

    @Column({ default: 0 })
    downvotes: number;

    @ManyToOne(() => User, user => user.posts)
    user: User;
}
