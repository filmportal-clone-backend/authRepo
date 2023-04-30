import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/user.dto';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepo: typeof User,
                private roleService: RoleService) {}

    async createUser(userDto: CreateUserDto) {
        const user = await this.userRepo.create(userDto);
        const role = await this.roleService.getRoleByValue('admin');

        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepo.findOne({where:{email}, include: {all:true}});
        return user;
    }
}
  