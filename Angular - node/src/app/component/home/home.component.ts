import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  status?:boolean;
  constructor(private manager:ManagerService)
  {
    this.status=manager.status;
  }

}
