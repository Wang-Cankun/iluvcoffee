import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto'
import { Public } from 'src/common/decorators/public.decorator'
import { Protocol } from 'src/common/decorators/protocol.decorator'
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Public()
  @UsePipes(ValidationPipe)
  @Get()
  async findAll(
    @Protocol() protocol,
    @Query() paginationQuery: PaginationQueryDto
  ) {
    // const { limit, offset } = paginationQuery;
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log(protocol)
    return this.coffeesService.findAll(paginationQuery)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id)
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto
  ) {
    return this.coffeesService.update(id, updateCoffeeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id)
  }
}
