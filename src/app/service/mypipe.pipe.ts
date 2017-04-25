import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class Mypipe implements PipeTransform{
  transform(avatar: string, params: string){
    if (avatar !== '') {
      return avatar;
    }
    return 0;
  }
}
