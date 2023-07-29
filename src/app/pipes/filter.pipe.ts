import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
   if(value.lenth === 0 || filterString === ''){

 return value
   }
   const users =[]
   
   for(let user of value){
    if(user['city'] == filterString || user['email'] === filterString ||  user['type'].toLowerCase() == filterString.trim().toLowerCase() 
    || user['custId'] === filterString || user['bookingID'] == filterString || user['transmission'].toLowerCase() == filterString.trim().toLowerCase()
     || user['fuel'].toLowerCase() == filterString.trim().toLowerCase() || user['carName'].toLowerCase() == filterString.trim().toLowerCase()
    || user['seater'] == filterString
    ){
      users.push(user)
    }
   }
   return users;
  }
  

}
