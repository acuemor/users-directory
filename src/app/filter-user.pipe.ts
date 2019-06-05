import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter.name && !filter.email){
      return items;
    }
    return items
      .filter(user => user.name.toUpperCase().includes(filter.name.toUpperCase())) // filter by name
  }

}
