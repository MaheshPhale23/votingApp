import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient, private router:Router) {}

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken():any{
    return localStorage.getItem('token')
  }

  login(data:any){
    return this.http.post('http://localhost:8084/generate-token',data);
  }

  addUser(data:any){
    return this.http.post('http://localhost:8084/user/',data);
  }

  isLoggedIn(){
    let tokenstr = this.getToken();
    if (tokenstr == undefined || tokenstr == '' || tokenstr == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

  //get current user
  getCurrentUser(){
    return this.http.get('http://localhost:8084/current-user');
  }

  // set user
  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }

  // get all users
  public getAllUsers(){
    return this.http.get('http://localhost:8084/user/getAllUsers');
  }

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  // delete user
  public deleteUser(id:any){
    return this.http.delete('http://localhost:8084/user/'+id);
  }


  savedVote(vote:any){
    return this.http.post('http://localhost:8084/votes/save',vote);
  }



  getVoteCount(id:any){
    return this.http.get<number>('http://localhost:8084/votes/candidate/'+id+'/count')
  }
}
