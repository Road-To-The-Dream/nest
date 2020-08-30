import {Controller, Get} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private configService: ConfigService,
        private userService: UserService,
    ) {}

    @Get('')
    get() {
        const user = this.userService.create({name: 'Sergey', email: 'fhlbc2012@gmail.com', password: '123456'});
        return user;
    }
}
