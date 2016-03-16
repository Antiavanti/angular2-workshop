import {COMMON_DIRECTIVES} from 'angular2/common';
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'products-sorter',
  directives: [COMMON_DIRECTIVES],
  template: `
    <form>
      <fieldset>
        <legend>Sorting</legend>
        <button *ngFor="#field of fields" (click)="release(field)">{{ field | uppercase }} ({{ direction(field) }})</button>
      </fieldset>
    </form>`,
  styles: [require('./products.styl')]
})
export class ProductsSorter {
  public sortingField: string = "";
  public sortingValue: number = 1;
  @Input() fields: string[];
  @Output() sorter = new EventEmitter<any>();
  direction(field: string) {
    if (this.sortingField !== field || this.sortingValue == 1) return 'OFF';
    if (this.sortingField === field && this.sortingValue == 0) return 'ASC';
    if (this.sortingField === field && this.sortingValue == 2) return 'DESC';
  }
  release(value: string) {
    if (this.sortingField !== value) this.sortingValue = 1;
    this.sortingValue = (this.sortingValue + 1) % 3;
    this.sortingField = value;
    this.sorter.emit({
      field: this.sortingField,
      value: this.sortingValue,
    });
  }
}
