import {COMMON_DIRECTIVES} from 'angular2/common';
import {Component, Input} from 'angular2/core';
import {ProductModel} from './model';
import {CurrencyPipe} from './../pipes/currency';

@Component({
  selector: 'products-element',
  pipes: [CurrencyPipe],
  directives: [COMMON_DIRECTIVES],
  template: `
    <span>
      <span>
        <b>{{ product.name }}</b>,
        <i>{{ product.price | currency:"PLN" }}</i>
      </span>
      <span [ngClass]="{'promo': product.promo}"></span><br/>
      <template ngFor #tag [ngForOf]="product.tags">
        <i class="tag">{{ tag }}</i>
      </template>
    </span>`,
  styles: [require('./products.styl')]
})
export class ProductsElement {
  @Input() product: ProductModel;
}
