import {Component, Input} from 'angular2/core';
import {ProductsList} from './products/list';
import {ProductsFilter} from './products/filter';
import {ProductsSorter} from './products/sorter';
import {ProductsOrder} from './products/order';
import {ProductsRepository} from './products/repository'
import {ProductModel} from './products/model'

@Component({
  selector: 'test',
  directives: [ProductsList, ProductsFilter, ProductsSorter, ProductsOrder],
  providers: [ProductsRepository],
  template: '<products-filter (filter)="currentFilter = $event"></products-filter>' +
  '<products-sorter (sorter)="currentSorter = $event" [fields]="sortableFields"></products-sorter>' +
  '<products-list [filter]="currentFilter" [sorter]="currentSorter" [products]="productsPromo"></products-list>' +
  '<products-list [filter]="currentFilter" [sorter]="currentSorter" [products]="productsNormal"></products-list>' +
  '<products-order [products]="products"></products-order>',
  styles: [require('./test.styl')]
})
export class TestComponent {
  public currentFilter: string = "";
  public currentSorter: any;
  public sortableFields: string[] = ['name', 'price'];
  public productsPromo: ProductModel[];
  public productsNormal: ProductModel[];
  public products: ProductModel[];
  constructor(public repository: ProductsRepository) {
    this.productsPromo = repository.getProductsPromo();
    this.productsNormal = repository.getProductsNormal();
    this.products = [...this.productsPromo].concat(this.productsNormal);
  }
}
