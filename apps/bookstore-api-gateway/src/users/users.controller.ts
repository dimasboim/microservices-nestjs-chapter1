import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'; // Import the UsersService class

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    @Get()
    findAll(){
        return this.usersService.findAll();
    }
}
