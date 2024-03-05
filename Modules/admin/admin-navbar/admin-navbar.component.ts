import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

  constructor(private loginService:LoginService){}

  public logout(){
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
  }
}
