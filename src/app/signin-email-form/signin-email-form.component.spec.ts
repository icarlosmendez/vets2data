import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninEmailFormComponent } from './signin-email-form.component';

describe('SigninEmailFormComponent', () => {
  let component: SigninEmailFormComponent;
  let fixture: ComponentFixture<SigninEmailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninEmailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
