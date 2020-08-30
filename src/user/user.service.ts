import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserInterface} from "./interfaces/user.interface";
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {
    }

    public async create(createUserDto: CreateUserDto): Promise<UserInterface> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createUserDto.password, salt);
        const createUser = new this.userModel(_.assignIn(createUserDto, {password: hash}));

        return await createUser.save();
    }

    public async getById(id: string): Promise<UserInterface> {
        return await this.userModel.findById(id).exec();
    }
}
