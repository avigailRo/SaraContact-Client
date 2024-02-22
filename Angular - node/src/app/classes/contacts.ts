import { EmailValidator } from "@angular/forms";
import { Address } from "./address";
import { Language } from "./language";
import { Group } from "./group";
import { Data } from "@angular/router";
import { DatePipe } from "@angular/common";
import { Status } from "./status";

export class Contacts {

        public id:number;
        public name?:string;
        public lname?:string;
        public email?:string;
        public phone?:string;
        public address:Address;
        public status?:Status;
        public language?:Language; 
        public group?:Group;
        public lastCall?:DatePipe;
        public prayerNames?:string;
        public note?:string;
     


}
