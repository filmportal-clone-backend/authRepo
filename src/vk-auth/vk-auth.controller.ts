import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { VkAuthGuard } from './vk.guard';
import { Request } from 'express';


@Controller('vkontakte')
export class VkAuthController {
    
    @Get()
    @UseGuards(VkAuthGuard)
    async vkAuth(@Req() req) {}

    @Get('redirect')
    @UseGuards(VkAuthGuard)
    vkAuthRedirect(@Req() req) {
        const accessToken  = req.user.accessToken;
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
