import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPackageReserveComponent } from './vacation-package-reserve.component';

describe('VacationPackageReserveComponent', () => {
  let component: VacationPackageReserveComponent;
  let fixture: ComponentFixture<VacationPackageReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationPackageReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPackageReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
