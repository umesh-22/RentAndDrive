import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCarsService {

  constructor(private http:HttpClient) { }

getChennaiList(): Observable<any> {
 return this.http.get('http://localhost:3000/chennai');
}
deleteChennaiList(id:any): Observable<any> {
  return this.http.delete(`http://localhost:3000/chennai/${id}`);
 }
 addChennaiList(data:any): Observable<any> {
  return this.http.post('http://localhost:3000/chennai',data);
 }

 update(id:any,data:any):Observable<any>{
  return this.http.put(`http://localhost:3000/chennai/${id}`,data);
}
// -------------------------------------------------
getMumbaiList(): Observable<any>{
 return this.http.get(' http://localhost:3000/mumbai');
}
getDelhiList():Observable<any>{
 return this.http.get('  http://localhost:3000/delhi');
}
getBangaloreList():Observable<any>{
  return this.http.get('  http://localhost:3000/bangalore');
}
getKolkataList(): Observable<any> {
 return this.http.get(' http://localhost:3000/kolkata');
}


}
