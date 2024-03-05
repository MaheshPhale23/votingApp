import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();

    this.loginService.loginStatusSubject.asObservable().subscribe(
      (data:any)=>{
        this.isLoggedIn = this.loginService.isLoggedIn();
      }
    )
  }


}
