import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  private product:Product[]=[]
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

 async findAll():Promise<Product[]> {
    return this.productRepository.find()
  }

  async findOne(id: number):Promise<Product|null> {
      const product = await this.productRepository.findOne({where:{id}});
    if (!product){
      throw new NotFoundException(`Product with ID ${id} not found.`);

    }
    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.productRepository.update(id,updateProductDto)
    return product;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
