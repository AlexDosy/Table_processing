import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterValue: string): any[] {
    if (!items || !filterValue) {
      return items;
    }
    filterValue = filterValue.toLowerCase();
    return items.filter(item => {
      // Modify this condition based on your specific filtering requirements
      return item.userId.toLowerCase().includes(filterValue);
    });
  }
}
