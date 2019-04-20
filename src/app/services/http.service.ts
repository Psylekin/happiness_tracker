import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) {
   }

  save_measurement(data){
    return this.http.post('https://happiness-tracker-e04b8.firebaseio.com/test.json',data)
    .subscribe(result => console.log(result));
  }
  

}
