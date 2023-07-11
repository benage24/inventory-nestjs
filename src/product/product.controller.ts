import { NotFoundException } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    const product=this.productService.create(createProductDto);
    if(!product){
      throw new Error('Error in creating product');

    }else{
      return 'product has been successfully created';
    }
   
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: number) {
    const product= await this.productService.findOne(+id)
    // if (!product) {
    //   throw new NotFoundException(`Product with ID ${id} not found.`);
    // }
    return product;
  
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const productExists = this.productService.findOne(+id);
    if (!productExists) {
      throw new NotFoundException('Product not found');
    }
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const productExists = this.productService.findOne(+id);
    if (!productExists) {
      throw new NotFoundException('Product not found');
    }
    return this.productService.remove(+id);
  }
}