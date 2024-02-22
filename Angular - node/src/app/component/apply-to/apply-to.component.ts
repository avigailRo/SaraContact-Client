import { Component } from '@angular/core';
import { Contacts } from 'src/app/classes/contacts';

@Component({
  selector: 'app-apply-to',
  templateUrl: './apply-to.component.html',
  styleUrls: ['./apply-to.component.css']
})
export class ApplyToComponent {


 
  
  user:Contacts = new Contacts();
  visible: boolean = false;
  formType: string = ''; // הוסף משתנה זה

  

  showDialog(formType: string) {
    this.formType = formType; // עדכן את הערך של המשתנה
    this.visible = true;
// כאן תוכל להשתמש בתנאי לפי הסוג של הטופס ולהתאים את הפעולות בהתאם
  }

  showComponent(formType: string) {
    this.formType = formType; // עדכן את הערך של המשתנה
    this.visible = !this.visible;
// כאן תוכל להשתמש בתנאי לפי הסוג של הטופס ולהתאים את הפעולות בהתאם
  }

}
