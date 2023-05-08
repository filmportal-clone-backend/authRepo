import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { Role } from './role/role.model';
import { UserRoles } from './role/userRole.mode';
import { GoogleAuthModule } from './google-auth/google-auth.module';
import { GoogleUser } from './google-auth/google.user.model';
import { VkAuthModule } from './vk-auth/vk-auth.module';
import { VKUser } from './vk-auth/vk.model';

@Module({
  imports: [AuthModule, UserModule, RoleModule, GoogleAuthModule, VkAuthModule, SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DBHOST || "localhost",
    port: Number(process.env.DBPORT) || Number("5432"),
    username: process.env.DBUSER || "postgres",
    password: process.env.DBPASS ||"admin",
    database: process.env.DBNAME ||"auth",
    models: [User, Role, UserRoles, GoogleUser, VKUser],
    autoLoadModels: true    
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
