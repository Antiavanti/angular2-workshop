import {EventEmitter} from 'angular2/core';
import {ProductsRepository} from './repository';
import {ProductModel} from './model';
import {Observable} from "rxjs/Observable";

export class ProductsRepositoryLocal implements ProductsRepository {
  productsPromo: EventEmitter<ProductModel[]> = new EventEmitter();
  productsNormal: EventEmitter<ProductModel[]> = new EventEmitter();
  getProductsPromo(): Observable<ProductModel[]> {
    this.productsPromo.emit([
      new ProductModel('Pierogsy', 12.99, true, ['obiadek', 'szamka']),
      new ProductModel('Piwko', 4.99, true, ['browarek', 'paliwo']),
      new ProductModel('Chipeski', 8.99, true, ['pyszności', 'masa'])
    ]);
    return this.productsPromo;
  }
  getProductsNormal(): Observable<ProductModel[]> {
    this.productsNormal.emit([
      new ProductModel('Cistko', 15.99, false, ['cukry', 'słodkości']),
      new ProductModel('Kawka', 10.99, false, ['energy', 'wakeup']),
      new ProductModel('Pomarańczka', 12.99, false, ['owocki', 'witaminy'])
    ]);
    return this.productsNormal;
  }
}
