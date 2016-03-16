import {Pipe} from 'angular2/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe {
  transform(value: number, parameters: any[]) {
    let currency = String(parameters[0]);
    let mapping: {[key: string]: string} = {PLN: 'zł',  USD: '$'};
    return value.toFixed(2) + mapping[currency];
  }
}
