import{PartialType}from'@nestjs/mapped-types';
import{CreateProductDto}from'./create-product.dto';

export class PartialUpdateProductDto extends PartialType(CreateProductDto) {
  // This class will have all fields from CreateProductDto but all will be optional
}