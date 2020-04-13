import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPackageEditComponent } from './vacation-package-edit.component';

describe('VacationPackageEditComponent', () => {
  let component: VacationPackageEditComponent;
  let fixture: ComponentFixture<VacationPackageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationPackageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPackageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
