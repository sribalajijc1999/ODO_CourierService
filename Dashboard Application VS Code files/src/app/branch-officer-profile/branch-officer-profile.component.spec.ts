import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficerProfileComponent } from './branch-officer-profile.component';

describe('BranchOfficerProfileComponent', () => {
  let component: BranchOfficerProfileComponent;
  let fixture: ComponentFixture<BranchOfficerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOfficerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOfficerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
