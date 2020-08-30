import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true
        }),
        MongooseModule.forRoot(
            'mongodb://localhost:27017/testDB',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                user: 'root',
                pass: '123456'
            }
        ),
        UserModule,
        AuthModule,
    ],
    controllers: [AppController],
})
export class AppModule {
}
