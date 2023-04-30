import { Controller, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        const user = await this.userService.createUser(userDto);
        return user;
    }
}
