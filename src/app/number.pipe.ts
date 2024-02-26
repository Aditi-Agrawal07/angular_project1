import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
  standalone: true
})
export class NumberPipe implements PipeTransform {

  transform(value: String, type: string): unknown {
    if((type === "first" || type === "third" )&& (value === "" || value == null)){
      value = "***"
    }
    if(type === "second"){
      if(value.length == 1){
          value = value + "*"
      }else{
        value = "**"
      }
    }
   
    return value;
  }

}
