import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapsapiComponent } from './googlemapsapi.component';

describe('GooglemapsapiComponent', () => {
  let component: GooglemapsapiComponent;
  let fixture: ComponentFixture<GooglemapsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
