import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(':id')
  async getUserInfo(@Param('id') id: number) {
    const user = this.userService.fetchUser(id);
    return user;
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() userData: Partial<User>,
  ): Promise<User> {
    return this.userService.updateUser(id, userData);
  }
}
