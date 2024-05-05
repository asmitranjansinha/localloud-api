// auth.controller.ts
import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        console.log(body.username, body.password);
        const user = await this.authService.validateUser(body.username, body.password);
        if (user === null) {
            return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() body: { username: string; password: string }) {
        try {
            const user = await this.authService.register(body.username, body.password);
            return user;
        } catch (error) {
            return { error: error.message };
        }
    }
}
