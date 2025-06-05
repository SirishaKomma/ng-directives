import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: string[], searchTerm:string): string [] {
   if(!array || !searchTerm) return array;
  return  array.filter(item=>item.toLowerCase().includes(searchTerm.toLocaleLowerCase())) 
  }

}
