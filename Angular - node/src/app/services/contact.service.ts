import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts } from '../classes/contacts';
import { Address } from '../classes/address';
import { Observable } from 'rxjs';
import { Expansion } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  URL="https://localhost:7045/api/Contact/";
  URLaddress="https://localhost:7045/api/Address/"

  getContacts():Observable<Array<Contacts>>
  {
    return this.http.get<Array<Contacts>>(this.URL + "GetAllContacts");
  }

  // addressId:Number=0;
  addContact(contact: Contacts):boolean
  {
    
    this.insertAddress(contact.address).subscribe(
      (data:number)=>
      {
        if(data!=-1)
        {
         contact.address.id=data;
          this.insertContact(contact).subscribe(
            data=> {
              console.log(data);
              return true},
          er=>{return false}
          );
          return false;
        }
        else{
          alert("שגיאה בהוספת הכתובת") 
          return false;      
        }       
      },
      err=>
      {
        console.log(err.message);
        return false;
      }
    );
   return false;
  }

  insertAddress(address:Address):Observable<number>
  {
    return this.http.post<number>(this.URLaddress + "AddAddress",address);
  }

  getAddress():Observable<Array<Address>>
  {
    return this.http.get<Array<Address>>(this.URLaddress + "GetAllAddress");
  }

  insertContact(contact: Contacts):Observable<boolean>
  {
    return this.http.post<boolean>(this.URL + "AddContact",contact);
  }
  
  getGroup(name:string):Observable<number>{

    return this.http.get<number>(this.URL + "GetGroup",{params:{nameGroup:name}});
  }
}
