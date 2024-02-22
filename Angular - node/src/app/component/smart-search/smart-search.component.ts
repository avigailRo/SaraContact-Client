import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-smart-search',
  templateUrl: './smart-search.component.html',
  styleUrls: ['./smart-search.component.css']
})

export class SmartSearchComponent {
  searchTerm: string = '';
  searchResults: string = '';

    items: MenuItem[] = [];

  // constructor() {
  //   // כאן אתה יכול להגדיר את התפריט על ידי הוספת פריטים למערך items
  //   this.items = [

  //   ];
  // }

  onSubmit() {
    // כאן תוכל להשתמש ב- AJAX או Fetch API כדי לשלוח את הבקשה לשרת ולקבל את התוצאות.
    // לדוגמה:
    // fetch(`/search?query=${this.searchTerm}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.searchResults = data; // להציג את התוצאות
    //   });

    // לדוגמה, אנחנו משתמשים במחרוזת סטטית במקום לשלוח בקשה אמיתית:
    this.searchResults = "כאן תוצאות החיפוש יוצגו";
  }

}
  



