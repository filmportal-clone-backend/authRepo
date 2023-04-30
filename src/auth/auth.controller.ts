import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/registration')
    async registartion(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Get()
    showTestPage() {
        return "Main Page";
    }
}
