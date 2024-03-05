import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadndidateListComponent } from './cadndidate-list.component';

describe('CadndidateListComponent', () => {
  let component: CadndidateListComponent;
  let fixture: ComponentFixture<CadndidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadndidateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadndidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
