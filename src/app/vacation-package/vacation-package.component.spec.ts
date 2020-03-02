import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPackageComponent } from './vacation-package.component';

describe('VacationPackageComponent', () => {
  let component: VacationPackageComponent;
  let fixture: ComponentFixture<VacationPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
