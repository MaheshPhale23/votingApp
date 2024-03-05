import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {

  constructor(private loginService:LoginService){}

  logout(){
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
  }

}
