import { Controller, Post, Get, Body } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/role.dto';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Post()
    async createRole(@Body() roleDto: CreateRoleDto) {
        const role = await this.roleService.createRole(roleDto);
        return role;
    }

    @Get()
    async getRoles() {
        const roles = await this.roleService.getRoles();
        return roles;
    }
}
