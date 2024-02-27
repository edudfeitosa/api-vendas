import { Entity, Repository } from 'typeorm';
import Product from '../entities/products/product';

@Entity('products')
export class ProductRepository extends Repository<Product> {
  
  public async findByName(name: string): Promise<Product | null> {
    const product =  this.findOne({
      where: {
        name
      }
    });

    return product;
  }
}