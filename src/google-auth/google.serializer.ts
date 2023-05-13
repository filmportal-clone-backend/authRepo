import { PassportSerializer } from "@nestjs/passport";
import { GoogleAuthService } from "./google-auth.service";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class GoogleSessionSerializer extends PassportSerializer {
    constructor(private googleAuthService: GoogleAuthService) {
        super();
        
    }

    serializeUser(user: any, done: Function) {
        done(null, user);
    }

    async deserializeUser(payload: any, done: Function) {
        console.log(1);
        console.log(payload);
        
        const user = await this.googleAuthService.findUserByEmail(payload.user.email);
        return user ? done(null, user) : done(null, null);
    }
}