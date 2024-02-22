import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../classes/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  status?:boolean;
  manager?:Manager;
  URL="https://localhost:7226/api/Manager/"
  constructor(private http:HttpClient) {
    this.status=false;
   }

   login(man:Manager):Observable<boolean>
   {
    console.log(man);
      return this.http.post<boolean>(this.URL+"Login",man);
   }
}
