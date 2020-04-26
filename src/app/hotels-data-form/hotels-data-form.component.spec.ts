import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsDataFormComponent } from './hotels-data-form.component';

describe('HotelsDataFormComponent', () => {
  let component: HotelsDataFormComponent;
  let fixture: ComponentFixture<HotelsDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
