import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {ProductsRepository} from './repository';
import {ProductModel} from './model';

import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs";

@Injectable()
export class ProductsRepositoryRemote implements ProductsRepository {
  public request: any;
  constructor(http: Http) {
    this.request = new ReplaySubject(1);
    http.get('products.json')
      .map((res) => res.json())
      .subscribe((res) => this.request.next(res));
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
