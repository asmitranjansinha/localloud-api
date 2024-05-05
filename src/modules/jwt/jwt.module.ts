// jwt.module.ts
import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Module({
    providers: [JwtService],
    exports: [JwtService], // Export JwtService to make it available for injection in other modules
})
export class JwtModule { }
