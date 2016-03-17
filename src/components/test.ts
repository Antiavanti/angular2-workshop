import {Component, Inject, Input, provide} from 'angular2/core';
import {ProductsList} from './products/list';
import {ProductsFilter} from './products/filter';
import {ProductsSorter} from './products/sorter';
import {ProductsOrder} from './products/order';
import {ProductsRepository} from './products/repository'
import {ProductsRepositoryLocal} from './products/repository-local'
import {ProductsRepositoryRemote} from './products/repository-remote'
import {ProductModel} from './products/model'

@Component({
  selector: 'test',
  directives: [ProductsList, ProductsFilter, ProductsSorter, ProductsOrder],
  providers: [provide('ProductsRepository', {useClass: ProductsRepositoryRemote})],
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
  public productsPromo: ProductModel[] = [];
  public productsNormal: ProductModel[] = [];
  public products: ProductModel[] = [];
  constructor(@Inject('ProductsRepository') repository: ProductsRepository) {
    repository.getProductsPromo().subscribe(products => {
      this.productsPromo = products;
      this.products = this.products.concat(this.productsPromo);
    });
    repository.getProductsNormal().subscribe(products => {
      this.productsNormal = products;
      this.products = this.products.concat(this.productsNormal);
    });
  }
}
