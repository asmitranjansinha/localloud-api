// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) { }

    async findByUsername(username: string): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ where: { username } });
        return user;
    }

    async findById(id: number): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { id } });
    }

    async fetchUser(id: number) {
        const user = await this.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const { password, jwtToken, jwtTokenExpires: _, ...result } = user;
        return result;
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        const user = await this.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const updatedUser = { ...user, ...userData };
        const { password, jwtToken, jwtTokenExpires, ...result } = updatedUser;
        return this.userRepository.save(result);
    }

    async createUser(username: string, password: string): Promise<string> {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            username,
            password: hashedPassword,
        });

        // Generate JWT token
        const payload = { username: newUser.username, sub: newUser.id };
        const token = this.jwtService.generateToken(payload);

        // Store JWT token and its expiry in the database
        newUser.jwtToken = token;
        // Example: set token expiry to 1 hour from now
        newUser.jwtTokenExpires = new Date(Date.now() + 3600000); // 1 hour in milliseconds

        await this.userRepository.save(newUser);

        return token;
    }
}
