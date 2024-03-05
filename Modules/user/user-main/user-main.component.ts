import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrl: './user-main.component.css'
})
export class UserMainComponent {

  constructor(private loginService:LoginService, private router:Router){}

  onLogout(){
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
  }

}
