import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'teamNamepipe'
})
export class Mypipesearch implements PipeTransform {
  transform(seach: any, params: string) {
    if(params !== '') {
      // seach = seach.toUpperCase();
      return seach.filter((res: any) =>
        res.team ===  params
        )
      } else {
        return seach;
      }
   }
 }
