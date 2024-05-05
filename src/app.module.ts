import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';
import { PostModule } from './modules/post/post.module';
import { Post } from './modules/post/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'asmy8h@0607',
      database: 'EPICS_REDDIT',
      entities: [User, Post],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
