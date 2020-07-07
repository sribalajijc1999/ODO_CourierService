import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficerDashboardComponent } from './branch-officer-dashboard.component';

describe('BranchOfficerDashboardComponent', () => {
  let component: BranchOfficerDashboardComponent;
  let fixture: ComponentFixture<BranchOfficerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOfficerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOfficerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
