// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module'; // Import the UserModule here
import { JwtModule } from '../jwt/jwt.module';

@Module({
    imports: [UserModule, JwtModule], // Import the UserModule
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule { }