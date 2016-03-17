import {ProductModel} from './model';
import {Observable} from "rxjs/Observable";

export interface ProductsRepository {
  getProductsPromo(): Observable<ProductModel[]>;
  getProductsNormal(): Observable<ProductModel[]>;
}
