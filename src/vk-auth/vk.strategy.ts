import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy, Profile, VerifyCallback} from "passport-vkontakte";
import { VkAuthService } from "./vk-auth.service";



@Injectable()
export class VKStrategy extends PassportStrategy(Strategy, "vkontakte") {
    constructor(private userService: VkAuthService) {
        super({
            clientID: process.env.VK_CLIENT_ID,
            clientSecret: process.env.VK_SECRET,
            callbackURL: process.env.VK_REDIRECT_URI,
            scope: ['profile'],
        }, async function(
            accessToken: string,
            refreshToken: string,
            params: any,
            profile: any,
            done: VerifyCallback
        ) {
            const user = await userService.validateUser({email: profile.email, displayName: profile.displayName, accessToken: accessToken,
                username: profile.username});
            return done(null, user);
        });
    }
}