import {Pipe} from 'angular2/core';

@Pipe({
  name: 'sort'
})
export class SortPipe {
  transform(value: any[], parameters: any[]) {
    value = [...value];
    var conditions = parameters[0] ? parameters[0] : {field: "", value: 1};
    if (conditions.field.length > 0) {
      value.sort((a: any, b: any) => {
        if (a[conditions.field] > b[conditions.field]) {
          return 1 - conditions.value;
        }
        if (a[conditions.field] < b[conditions.field]) {
          return -1 + conditions.value;
        }
        return 0;
      });
    }
    return value;
  }
}
