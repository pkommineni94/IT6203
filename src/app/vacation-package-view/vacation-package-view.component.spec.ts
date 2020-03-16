import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPackageViewComponent } from './vacation-package-view.component';

describe('VacationPackageViewComponent', () => {
  let component: VacationPackageViewComponent;
  let fixture: ComponentFixture<VacationPackageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationPackageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPackageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
