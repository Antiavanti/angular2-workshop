import {COMMON_DIRECTIVES} from 'angular2/common';
import {Component, Input} from 'angular2/core';
import {ProductsElement} from './element';
import {ProductModel} from './model';
import {SearchPipe} from './../pipes/search';
import {SortPipe} from './../pipes/sort';

@Component({
  selector: 'products-list',
  pipes: [SearchPipe, SortPipe],
  directives: [COMMON_DIRECTIVES, ProductsElement],
  template: `
    <ul>
      <li *ngFor="#product of products | search:filter | sort:sorter">
        <products-element [product]="product"></products-element>
      </li>
    </ul>`,
  styles: [require('./products.styl')]
})
export class ProductsList {
  @Input() filter: string;
  @Input() sorter: any;
  @Input() products: ProductModel[];
}
