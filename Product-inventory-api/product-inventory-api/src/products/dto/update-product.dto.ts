import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends CreateProductDto {
  // All fields are optional for update, so we can use PartialType
  // from @nestjs/mapped-types to make all fields optional
}