import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VKUser } from './vk.model';
import { VKUserDto } from './dto/vk.user.dto';

@Injectable()
export class VkAuthService {
    constructor(@InjectModel(VKUser) private vkUserRepo: typeof VKUser) {}

    async validateUser(userDto: VKUserDto) {
        const user = await this.vkUserRepo.findOne({where: {username: userDto.username}});
        if(user) return user;
        const newUser = await this.vkUserRepo.create(userDto);
        return newUser;
    }

    async findUserByUsername(username: string) {
        const user = await this.vkUserRepo.findOne({where: {username}});
        return user;
    }
}
