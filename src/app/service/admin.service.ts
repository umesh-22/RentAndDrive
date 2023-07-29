import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
    
  private url ="http://localhost:3000/data";  
  constructor(private http:HttpClient) { }

  // for bookingList
  getData():Observable<any>{
    return this.http.get(this.url);
  }   
  delete(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  addData(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/data',data);
  }  


  

// For Cancellation
 private cancelUrl ='http://localhost:3000/data'
deleteBooking(bookingID:any):Observable<any>{
  return this.http.delete(`${this.cancelUrl}/${bookingID}`);
}
getCancel():Observable<any>{
  return this.http.get(' http://localhost:3000/cancellation')
  
}
addCancel(data:any):Observable<any>{
  return this.http.post(' http://localhost:3000/cancellation', data)
  
}

// admin login
getList():Observable<any>{
  return this.http.get('http://localhost:3000/login');
}

// For Booking ID 

GenerateCode() {
  let a = Math.random() * 10;   
  let b = Math.random() * 10;
  let c = Math.random() * 10;
  let d = Math.random() * 10;
  let code = `${Math.round(a)}${Math.round(b)}${Math.round(c)}${Math.round(d)}`;
  return code;
}

// For carList

private url1="http://localhost:3000/chennai";
getUserData():Observable<any>{
  return this.http.get(this.url1);
}

add(data:any):Observable<any>{
  return this.http.post(this.url1,data);
}

update(id:any,data:any):Observable<any>{
  return this.http.put(`${this.url1}/${id}`,data);
}
deleteCar(id:any):Observable<any>{
  return this.http.delete(`${this.url1}/${id}`);
}
// host login and Register
getHost():Observable<any>{
  return this.http.get('  http://localhost:3000/hostLogin')

}
// add and get host registration
getHostRegister():Observable<any>{
  return this.http.get('  http://localhost:3000/hostRegister')

}
addHostRegister(data:any):Observable<any>{
  return this.http.post('  http://localhost:3000/hostRegister', data)

}
deleteHostRegister(id:any):Observable<any>{
  return this.http.delete(`http://localhost:3000/hostRegister/${id}`)

}
// Host Car add and Delete
getHostCar():Observable<any>{
  return this.http.get( 'http://localhost:3000/carListHost')
}
addHostCar(data:any):Observable<any>{
  return this.http.post(' http://localhost:3000/carListHost' ,data)
}
deleteHostCar(id:any):Observable<any>{
  return this.http.delete(` http://localhost:3000/carListHost/${id}`)
}

// getById(id:any):Observable<any>{
//   return this.http.get(`http://localhost:3000/data/${id}`)


islogged(){
  return sessionStorage.getItem('role')!=null ? sessionStorage.getItem('role')?.toString():'';
}


getHostbyID(id:any):Observable<any>{
  return this.http.get(`http://localhost:3000/hostRegister/${id}`)
}
// addHostbyID(id:any, data:any):Observable<any>{
//   return this.http.post(`http://localhost:3000/hostRegister/${id}`, data)
// }

// host add list



}

