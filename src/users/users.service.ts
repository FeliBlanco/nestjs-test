import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './users.entity';
import { Repository } from 'typeorm'

import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }


    async createUser(user: CreateUserDto) {

        const findUser = await this.userRepository.findOne({
            where: {
                correo: user.correo
            }
        });

        if(findUser) {
            console.log(findUser)
            return new HttpException('An account exist with this correo.', 400);
        }

        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
    getUsers() {
        return this.userRepository.find();
    }
    getUser(id: number) {
        return this.userRepository.findOne({
            where: {
                id
            }
        })
    }
    deleteUser(id: number) {
        console.log(`delete number: ${id}`)
        return this.userRepository.delete({ id })
    }
}
