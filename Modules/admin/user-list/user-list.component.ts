import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users:any [] = []
  filtered: any = [];

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe(
      (res:any)=>{
        // console.log(res);
        this.users = res;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  onDeleteHandler(userId:any){

    this.loginService.deleteUser(userId).subscribe(
      (res:any)=>{
        this.filtered = this.users.filter((ele:any)=> ele.id != userId);
        this.users = this.filtered;

        alert("User Deleted succefully");
      }
    )

  }
  // users:any = []
  // filtered: any = [];

  // constructor(private userService:UserService,){}
  // ngOnInit(): void {

  //   this.userService.getUser().subscribe(
  //     (res:any)=>{
  //       console.log(res)
  //       this.users = res
  //     },
  //     (err:any)=>{
  //       console.log(err)
  //     }
  //   )

  // }



}
