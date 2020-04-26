import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightsdataFormComponent } from './new-flightsdata-form.component';

describe('NewFlightsdataFormComponent', () => {
  let component: NewFlightsdataFormComponent;
  let fixture: ComponentFixture<NewFlightsdataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFlightsdataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlightsdataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
