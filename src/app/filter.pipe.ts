import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    const filteredArray: any[] = [];
    
    console.log(value, filterString, propName);

    if(filterString.length === 0) {
      return value;
    }

    for (const server of value) {
      if(server[propName].toLowerCase() === filterString){
        filteredArray.push(server);
      }
    }
    return filteredArray;
  }

}
