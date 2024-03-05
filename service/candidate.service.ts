import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient, private router:Router) {}

  addCandidate(data:any){
    return this.http.post('http://localhost:8084/candidate/add',data);
  }

  getAllCandidate(){
    return this.http.get('http://localhost:8084/candidate/all');
  }

  updateCandidate(id:any, data:any){
    return this.http.put('http://localhost:8084/candidate/update/'+id,data);
  }

  deletCandidate(id:any){
    return this.http.delete('http://localhost:8084/candidate/delete/'+id);
  }
}
