import { Injectable } from '@angular/core';
import Products from '../../models/Products';
import { BaseService } from '../base.service';

@Injectable()
export class ProductsService extends BaseService {
  public url = '/api/v1/productss';
  public model = Products;
}


