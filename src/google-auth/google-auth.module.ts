import { Module } from '@nestjs/common';
import { GoogleAuthController } from './google-auth.controller';
import { GoogleAuthService } from './google-auth.service';
import { GoogleStrategy } from './google.strategy';
import { GoogleUser } from './google.user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoogleSessionSerializer } from './google.serializer';

@Module({
  imports: [SequelizeModule.forFeature([GoogleUser])],
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService, GoogleStrategy, GoogleSessionSerializer]
})
export class GoogleAuthModule {}
