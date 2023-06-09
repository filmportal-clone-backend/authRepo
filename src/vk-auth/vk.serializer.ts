import { PassportSerializer } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { VkAuthService } from "./vk-auth.service";

@Injectable()
export class VKSessionSerializer extends PassportSerializer {
    constructor(private vkUserService: VkAuthService) {
        super();
    }

    serializeUser(user: any, done: Function) {
        done(null, user);
    }

    async deserializeUser(payload: any, done: Function) {
        console.log(2);
        
        const user = await this.vkUserService.findUserByUsername(payload.user.username);
        return user ? done(null, user) : done(null, null);
    }
}