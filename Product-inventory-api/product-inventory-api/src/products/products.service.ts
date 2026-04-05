import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PartialUpdateProductDto } from './dto/Partial-update-product.dto';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';


@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private productRepository: Repository<Products>) {}

    async create(dto: CreateProductDto){
        const product = this.productRepository.create(dto);
        await this.productRepository.save(product);
        return {message: 'Product created successfully', product};
    }


    async findAll(){
        const data = await this.productRepository.find({
            order: {
                createdAt: 'DESC'
            }
        });
        return data;
    }

    async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return { message: 'Product found', data: product };
    }

   

    async remove(id: number){
        await this.findOne(id);
        await this.productRepository.delete(id);
        return {message: 'Product deleted successfully'};       
    }

    async replace(id: number, dto: CreateProductDto){
        await this.findOne(id);
        await this.productRepository.update(id, dto);
        const replaced = await this.findOne(id);
        return {message: 'Product replaced successfully', replaced};
    }

    async partialUpdate(id: number, dto: PartialUpdateProductDto){
        await this.findOne(id);
        await this.productRepository.update(id, dto);
        const updated = await this.findOne(id);
        return {message: 'Product partially updated successfully', updated};
    }


    async search(keyword: string) {
        const data = await this.productRepository.find({
            where: {name: ILike(`%${keyword}%`)},

        });
        return {message: 'Search results', data};
    }

    async findByCategory(category: string) {
        const data = await this.productRepository.find({
            where: {category},
        });
        return {message: `Products in category: ${category}`, data};
    }

    async toggleActive(id: number) {
        const product = await this.productRepository.findOne({where: {id}});
        if(!product)
            throw new NotFoundException(`Product ${id} not found`);
        product.isActive = !product.isActive;
        await this.productRepository.save(product);
        return {message: `Product ${product.isActive ? 'activated' : 'deactivated'} successfully`, data: product};
    }


}
       