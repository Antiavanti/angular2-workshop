import {COMMON_DIRECTIVES, FORM_PROVIDERS, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Component, Input} from 'angular2/core';
import {FormValidator} from './validators'
import {ProductModel} from './model';

@Component({
  selector: 'products-order',
  directives: [COMMON_DIRECTIVES],
  template: `
    <form [ngFormModel]="form" (submit)="sendOrder($event)">
      <fieldset>
        <legend>Ordering</legend>
        <table>
          <tr>
            <td>Fullname:</td>
            <td><input type="text" ngControl="fullname"/></td>
          </tr>
          <tr>
            <td>E-mail:</td>
            <td><input type="text" ngControl="email"/></td>
          </tr>
          <tr>
            <td>Address:</td>
            <td><input type="text" ngControl="address"/></td>
          </tr>
          <tr>
            <td>Product:</td>
            <td>
              <select ngControl="product">
                <option *ngFor="#product of products">{{ product.name }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Count:</td>
            <td><input type="text" ngControl="count"/></td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit" [disabled]="!form.valid">Send</button></td>
          </tr>
        </table>
      </fieldset>
    </form>`,
  styles: [require('./products.styl')]
})
export class ProductsOrder {
  public form: ControlGroup;
  @Input() products: ProductModel[];
  constructor(formBuilder: FormBuilder) {
    this.form = <ControlGroup>formBuilder.group({
      fullname: formBuilder.control('Joe Smith', Validators.required),
      email: formBuilder.control('joe@gmail.com', Validators.compose([Validators.required, FormValidator.mailFormat])),
      address: formBuilder.control('New York', Validators.required),
      product: formBuilder.control('', Validators.required),
      count: formBuilder.control('', Validators.compose([Validators.required, FormValidator.positiveInteger]))
    });
  }
  sendOrder($event: any) {
    $event.preventDefault();
    console.log(this.form.value);
  }
}
