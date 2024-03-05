import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../service/candidate.service';
import { LoginService } from '../../../service/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-total-votes',
  templateUrl: './total-votes.component.html',
  styleUrl: './total-votes.component.css'
})
export class TotalVotesComponent implements OnInit{

  candidates:any [] = [];

  candidateVoteCounts: { [key: string]: number } = {};

  constructor(private candidateService:CandidateService, private loginService:LoginService,
    private http:HttpClient){}

  ngOnInit(): void {
    this.candidateService.getAllCandidate().subscribe(
      (res:any)=>{
        this.candidates = res;
        this.fetchVoteCounts();
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  fetchVoteCounts() {
    this.candidates.forEach(candidate => {
      this.loginService.getVoteCount(candidate.candidateId).subscribe(
        (count: number) => {
          this.candidateVoteCounts[candidate.candidateId] = count; // Store vote count in dictionary
        },
        (error: any) => {
          console.error('Error occurred while fetching vote count:', error);
          this.candidateVoteCounts[candidate.candidateId] = 0; // Set vote count to 0 in case of error
        }
      );
    });
  }
}





