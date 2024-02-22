import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/classes/contacts';
import { ContactService } from 'src/app/services/contact.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Address } from 'src/app/classes/address';
import { Language } from 'src/app/classes/language';
import { Group } from 'src/app/classes/group';
import { Country } from 'src/app/classes/country';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService, ConfirmationService, DialogService],
})

export class ContactComponent implements OnInit {

  user =new Contacts();
  // משתנים להצגת הכפתור הוספת איש קשר
  visible: boolean = false;
  formType: string = '';
  //country
  countrys: Country[] | undefined;
  selectedCountry: Country;
  //groups
  groups: Group[] | undefined;
  selectedGroup:Group;
  //language
  language: Language[] | undefined;
  selectedLang:Language;
    
  ViewC: boolean = false;
  currentAccordionIndex: number | null = null;
  contactsList: Array<Contacts> = [];
  isAccordionOpen: boolean = false;

  constructor(private contactServe:ContactService){}
    // עושה כמה פעולות ואחראי לשלוח לשרת להוספת איש קשר החדש
    onClick(a:string,b:string,c:string) {
      // this.user.address=new Address(0,this.selectedCountry.countryName,a,b,parseInt(c),0)
      this.user.group=this.selectedGroup;
      this.user.language=this.selectedLang;     
      if (this.user.name!="")  {
      if(  this.contactServe.addContact({
          id: 0, name: this.user.name, 
          address: this.user.address,
          lname: this.user.lname,
          email: this.user.email,
          phone: this.user.phone,
          language: this.user.language,
          group: this.user.group,
          note:this.user.note,
          lastCall: this.user.lastCall,
          prayerNames: this.user.prayerNames
        }))
      {
        alert("good")
      }
      else{
        alert("bad")
      }
      }
          this.visible = false;
    }
    // מדפיסה את הטופס לפני שליחתו לשרת
    onSubmit() {
      console.log(this.user.name);
    }
    // משנה את המשתנים כאשר לוחצים על הכפתור נסגר ונפתח בהתאם
    showDialog(formType: string) {
      this.visible = true;
      this.formType = formType;
    }
    // כפתור של DropDwon לבחירת מדינה קבוצה ושפה
    ngOnInit() {
      this.countrys = [
        {id:1,countryName:'USA'},
        {id:2,countryName:'Israel'},
      ];
      this.groups=[
        {id:1,groupName:"ספרדים"},
        {id:2,groupName:"ליטאים"},
        {id:3,groupName:"חסידים"},       
      ];
      this.language=[
        {id:1,languageName:"עברית"},
        {id:2,languageName:"אנגלית"},
        {id:3,languageName:"אידיש"}
      ];
    }
    // 
    getContacts() {
      this.contactServe.getContacts().subscribe(
        (data) => {
          this.contactsList = data;
        },
        (err) => {
          console.log(err.message);
        }
      );
    }
    //הפעלה או כיבוי של הכפתור וקריאה לשרת בעת הפעלה ע"מ להציג את אנשי הקשר
    ViewContacts() {
      this.ViewC = !this.ViewC;
      this.getContacts();
    }
    //בעת הצגת אנשי קשר אחראי לפתוח את האוקורדיון
    accordionTabOpen(index: number) {
      if (this.currentAccordionIndex !== null) {
        this.currentAccordionIndex = null;
      }
      this.currentAccordionIndex = index;
    }
    // מחיקת איש קשר
    deleteContact(contactId: number) {
      if (confirm('האם אתה בטוח שברצונך למחוק איש קשר זה?')) {

      }
    }
    // עדכון פרטי איש קשר
    updateContact(contactId: number) {

    }
}
