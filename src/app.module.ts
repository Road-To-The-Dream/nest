import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {UserService} from "./user/user.service";
import {AuthService} from "./auth/auth.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule, AuthModule],
    controllers: [AppController],
    providers: [UserService, AuthService],
})
export class AppModule {
}
