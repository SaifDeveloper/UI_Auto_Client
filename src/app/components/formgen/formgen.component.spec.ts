import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgenComponent } from './formgen.component';

describe('FormgenComponent', () => {
  let component: FormgenComponent;
  let fixture: ComponentFixture<FormgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
