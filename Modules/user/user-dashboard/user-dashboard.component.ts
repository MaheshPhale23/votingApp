import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../service/candidate.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{

  Candidates:any [] = []
  selectedCandidateId:any;

  voteSubmitted: boolean = false;


  constructor(
    private candidateService:CandidateService,
    private loginService:LoginService
  ){}

  user = this.loginService.getUser();


  ngOnInit(): void {
    const selectedCandidateName = this.Candidates.find(c=> c.candidateId == this.selectedCandidateId);
    this.candidateService.getAllCandidate().subscribe(
      (res:any)=>{
        this.Candidates = res;
      }
    )
  }


  submitVote(){
    const selectedCandidateName = this.Candidates.find(c=> c.candidateId == this.selectedCandidateId).name;

    const userFields = {
      userId: this.user.userId,
      username: this.user.username,
      password: this.user.password,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      phone: this.user.phone
    }

    const voteData = {
      user: userFields,
      candidate:{
        candidateId:this.selectedCandidateId,
        name: selectedCandidateName
      }
    }

    this.loginService.savedVote(voteData).subscribe(
      (res:any)=>{
        alert('Vote submitted successfully!');
        console.log(res);
        this.voteSubmitted = true;
        this.selectedCandidateId = null;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }



}
