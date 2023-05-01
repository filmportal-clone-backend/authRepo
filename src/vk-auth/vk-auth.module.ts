import { Module } from '@nestjs/common';
import { VkAuthService } from './vk-auth.service';
import { VkAuthController } from './vk-auth.controller';
import { VKStrategy } from './vk.strategy';
import { VKUser } from './vk.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { VKSessionSerializer } from './vk.serializer';

@Module({
  imports: [SequelizeModule.forFeature([VKUser])],
  providers: [VkAuthService, VKStrategy, VKSessionSerializer],
  controllers: [VkAuthController]
})
export class VkAuthModule {}
