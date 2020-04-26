import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybookingComponent } from './displaybooking.component';

describe('DisplaybookingComponent', () => {
  let component: DisplaybookingComponent;
  let fixture: ComponentFixture<DisplaybookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaybookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
