import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private loginService:LoginService, private router:Router){}

  userdata = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  onRegister(){
    if(this.userdata.username.trim() == '' ||
    this.userdata.username == null){
      alert("Username Cannot be Blank")
      return;
    }
    if(this.userdata.password.trim() == '' ||
    this.userdata.password == null){
      alert("Passowrd Cannot be Blank")
      return;
    }

    this.loginService.addUser(this.userdata).subscribe(
      (res:any)=>{
        console.log(res);
        alert("User registered succefully");

        this.userdata = {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
      },
      (err)=>{
        console.log(err);
        alert('Username Already Exists.....');
      }
    )

  }
}
