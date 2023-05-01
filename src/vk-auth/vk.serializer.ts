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
        const user = await this.vkUserService.findUserByUsername(payload.username);
        console.log(user);
        
        return user ? done(null, user) : done(null, null);
    }
}