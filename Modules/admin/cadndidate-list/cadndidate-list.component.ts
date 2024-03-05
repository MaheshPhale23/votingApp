import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../service/candidate.service';

@Component({
  selector: 'app-cadndidate-list',
  templateUrl: './cadndidate-list.component.html',
  styleUrl: './cadndidate-list.component.css'
})
export class CadndidateListComponent implements OnInit {

  candidates:any [] = [];
  filtered: any = [];

  constructor(private candidateService:CandidateService){}

  ngOnInit(): void {
    this.candidateService.getAllCandidate().subscribe(
      (res:any)=>{
        this.candidates = res;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  onDeleteHandler(candidateId:any){
    this.candidateService.deletCandidate(candidateId).subscribe(
      (res:any)=>{
        this.filtered = this.candidates.filter((ele:any)=> ele.id != candidateId);
        this.candidates = this.filtered;

        alert("User Deleted succefully");
      }
    )
  }
;



}
