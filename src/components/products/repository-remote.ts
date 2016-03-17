import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {ProductsRepository} from './repository';
import {ProductModel} from './model';

import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/retry";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductsRepositoryRemote implements ProductsRepository {
  public request: any;
  constructor(http: Http) {
    this.request = http.get('products.json')
      .map(res => res.json());
  }
  getProductsPromo(): Observable<ProductModel[]> {
    return this.request.map((products: any) => {
      return products.promo.map((product: any) => new ProductModel(product));
    });
  }
  getProductsNormal(): Observable<ProductModel[]> {
    return this.request.map((products: any) => {
      return products.normal.map((product: any) => new ProductModel(product));
    });
  }
}
