// user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { User } from './user.entity';
import { JwtModule } from '../jwt/jwt.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
        JwtModule,
    ],
    controllers: [UserController],
    providers: [UserService, User],
    exports: [UserService], // Export the UserService if needed by other modules
})
export class UserModule { }
