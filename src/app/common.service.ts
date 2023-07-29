import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class CommonService {
    public commonSubject = new BehaviorSubject('');
    public commonMessage = this.commonSubject.asObservable();

    sendData(valueFromHomePage:any){
        this.commonSubject.next(valueFromHomePage);
           
    }
 
  }