// auth.controller.ts
import { Body, Controller, HttpException, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        const user = await this.authService.validateUser(body.username, body.password);
        if (user === null) {
            throw new HttpException('Invalid credentials', 401);
        }
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() body: { username: string; password: string }) {
        try {
            const user = await this.authService.register(body.username, body.password);
            return user;
        } catch (error) {
            throw new HttpException(error.message, 401);
        }
    }
}
