import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'products-filter',
  template: `
    <form>
      <fieldset>
        <legend>Filtering</legend>
        <input #value type="text" (keyup)="release(value.value)"/>
      </fieldset>
    </form>`,
  styles: [require('./products.styl')]
})
export class ProductsFilter {
  @Output() filter = new EventEmitter<string>();
  release(value: string) {
    this.filter.emit(value);
  }
}
