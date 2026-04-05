import { Controller, Post, Body, Get, Query, Param, ParseIntPipe, Patch, Put, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { PartialUpdateProductDto } from './dto/Partial-update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() dto: CreateProductDto) {
        return this.productsService.create(dto);
    }
    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get('search')
    search(@Query('keyword') keyword: string) {
        return this.productsService.search(keyword);
    }

    @Get('category/:category')
    findByCategory(@Param('category') category: string) {
        return this.productsService.findByCategory(category);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Patch(':id')update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: PartialUpdateProductDto,
    ) {
        return this.productsService.partialUpdate(id, dto);
    }

    @Put(':id') replace(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: CreateProductDto,
    ) {
        return this.productsService.replace(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.remove(id);
    }


    @Patch(':id/toggle-availability')
    toggle(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.toggleActive(id);
    }
    
    
}
