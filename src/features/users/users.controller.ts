import { Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  listar(): string {
    return 'Lista de users';
  }

  @Get('/:id')
  show(@Param('id') id: string): string {
    return `Mostrando user ${id}`;
  }

  @Put('/:id')
  alterar(@Param('id') id: string): string {
    return `Mudando user ${id}`;
  }

  @Delete('/:id')
  deletar(@Param('id') id: string): string {
    return `Removendo user ${id}`;
  }

  @Post()
  cadastrar(): string {
    return 'Opa criou :D';
  }
}
