import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';


@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser);
    }

    @Get()
    getUsers(): Promise <User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise <User> {
        return this.usersService.getUser(id);
    }

    @Post('/delete')
    deleteUser(@Body('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}