import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[], i:number = 1): any {
  	let url = 'assets/img/noimage.png';
  	if(!value) return url;
  	else if (value.length > i) return value[i].url;
  	else return url;
  }

}
