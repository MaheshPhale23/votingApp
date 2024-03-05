import { Component } from '@angular/core';
import { CandidateService } from '../../../service/candidate.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrl: './add-candidate.component.css'
})
export class AddCandidateComponent {

  constructor(private candidateService:CandidateService){}
  candidate = {
    name:''
  }

  OnCandidateAdd(){
    if(this.candidate.name.trim() == '' ||
    this.candidate.name == null){
      alert("Name Cannot be Blank")
      return;
    }

    this.candidateService.addCandidate(this.candidate).subscribe(
      (res:any)=>{
        console.log(res);
        alert("Candidate registered succefully");
        this.candidate = {
          name:''
        },
        (err:any)=>{
          console.log(err);
          alert('Something went wrong.....');
        }
      }
    )
  }

}
