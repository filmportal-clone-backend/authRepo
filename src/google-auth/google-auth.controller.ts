import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';
import { Request } from 'express';
import { GoogleAuthGuard } from './gooogle.guard';

@Controller('google')
export class GoogleAuthController {
    constructor(private googleService: GoogleAuthService) {}

    @Get()
    @UseGuards(GoogleAuthGuard)
    async googleAuth(@Req() req) {} 

    @Get('redirect')
    @UseGuards(GoogleAuthGuard)
    googleAuthRedirect(@Req() req) {
        const accessToken = req.user;
        return {accessToken};
    }
    
    @Get('status')
    user(@Req() request: Request) {
        if (request.user) {
            return { msg: 'Authenticated' };
        } else {
            return { msg: 'Not Authenticated' };
        }
    } 
}
