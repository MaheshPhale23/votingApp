import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.css'
})
export class AdminMainComponent {
  constructor(private loginService:LoginService){}

  onLogout(){
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
  }
}
