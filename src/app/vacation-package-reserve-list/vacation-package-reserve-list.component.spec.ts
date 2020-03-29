import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPackageReserveListComponent } from './vacation-package-reserve-list.component';

describe('VacationPackageReserveListComponent', () => {
  let component: VacationPackageReserveListComponent;
  let fixture: ComponentFixture<VacationPackageReserveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationPackageReserveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPackageReserveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
