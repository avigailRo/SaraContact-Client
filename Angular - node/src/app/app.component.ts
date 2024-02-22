import { Component } from '@angular/core';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ManagerService } from './services/manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keren-pirothiha';

  searchBarVisible: boolean = false;
  search() {
    // קוד לפעולת החיפוש כאן'
    this.searchBarVisible = !this.searchBarVisible;
  }
  // אופציה 1: יצירת משתנה בקוד עבור עמוד הנוכחי
currentpage: string = 'home'; // עבור הדוגמה, נקבע את העמוד הנוכחי ל-"home"
currentPage(page : string){
this.currentpage=page;
}

status?:boolean;

  constructor(private managerServ:ManagerService)
  {
    
  }
  ngOnInit()
  {
    this.status=this.managerServ.status;
    console.log(this.status);
  }

  
  

}
