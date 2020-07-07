import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportManagerDashboardComponent } from './transport-manager-dashboard.component';

describe('TransportManagerDashboardComponent', () => {
  let component: TransportManagerDashboardComponent;
  let fixture: ComponentFixture<TransportManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
