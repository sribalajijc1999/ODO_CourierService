import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportManagerProfileComponent } from './transport-manager-profile.component';

describe('TransportManagerProfileComponent', () => {
  let component: TransportManagerProfileComponent;
  let fixture: ComponentFixture<TransportManagerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportManagerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
