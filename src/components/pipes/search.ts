import {Pipe} from 'angular2/core';

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform(value: any[], parameters: string[]) {
    var search = new RegExp(parameters[0] && parameters[0].length > 0 ? parameters[0] : '.*', 'i');
    return value.filter((element: any) => !!JSON.stringify(element).match(search));
  }
}
