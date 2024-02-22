import { Component } from '@angular/core';
import { Manager } from 'src/app/classes/manager';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  [x: string]: any;

  status?:boolean;
  user: string = '';
  password: string = '';
  constructor(private managerServ:ManagerService ,private router:Router)
  {
    this.status=managerServ.status;
  }
  // enter(my:string,pass:string)
  // {
  //   this.managerServ.login(new Manager(1,my,pass)).subscribe(
  //     data => {
  //       if(data==true)
  //       {
  //         alert("שמחים לפגוש אותך");
  //         this.managerServ.status=true;
  //         this.status=true;
          
  //           this.router.navigate(['/home']); // מפנה לנתיב הבית
        
  //       }
  //       else
  //         alert("שם משתמש או סיסמא שגויים");
  //     },
  //     err=>
  //     {
  //       console.log(err.message);
  //     }
  //   )
  //   ;
  // }
  enter(my: string, pass: string) {
    this.managerServ.login(new Manager(1, my, pass)).subscribe(
      (data: any) => {
        if (data && data.success) { // בדיקת התחברות מוצלחת
          alert("שמחים לפגוש אותך");
          this.managerServ.status = true;
          this.status = true;
          this.router.navigate(['/home']); // מפנה לנתיב הבית
        } else {
          alert("שם משתמש או סיסמא שגויים");
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }

}
