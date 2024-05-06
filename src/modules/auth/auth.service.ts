// auth.service.ts

import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "../jwt/jwt.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService, // Assuming you have a UserService for managing users
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (!user) {
            return null; // User not found
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return null; // Passwords do not match
        }

        const { password: _, ...result } = user; // Exclude password from returned user object
        return result;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.generateToken(payload),
            id: user.id,
        };
    }

    async register(username: string, password: string): Promise<any> {
        // Check if the user already exists
        const existingUser = await this.userService.findByUsername(username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        // Create the new user
        const newUser = await this.userService.createUser(username, password);

        // Log in the new user and return the access token
        return this.login(newUser);
    }
}