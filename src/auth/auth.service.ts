import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService) {}

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if(candidate) {
            throw new HttpException('Пользователь с такой почтой уже существует!', HttpStatus.BAD_REQUEST);
        }
    
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user =  await this.userService.createUser({...userDto, password: hashPassword});

        return this.generateToken(user);
    }

    async login(loginDto: LoginDto) {
        const user = await this.validateUser(loginDto);
        return this.generateToken(user);
    }

    private async validateUser(dto: LoginDto) {
        const user = await this.userService.getUserByEmail(dto.email);
        if(!user) throw new UnauthorizedException({message: 'Неккоректный email'});

        const passwordEquals = await bcrypt.compare(dto.password, user.password)
        if(passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Неккоректный пороль'});
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, role: user.roles};
        const secretKey = process.env.JWT_SECRET || 'SECRET';

        return {
            token: this.jwtService.sign(payload, {secret: secretKey})
        }
    }
}
