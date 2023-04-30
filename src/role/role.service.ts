import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

    async createRole(roleDto: CreateRoleDto) {
        const role = await this.roleRepo.create(roleDto);
        return role;
    }

    async getRoles() {
        const role = await this.roleRepo.findAll({include: {all:true}});
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepo.findOne({where: {value}, include: {all:true}});
        return role;
    }
}
