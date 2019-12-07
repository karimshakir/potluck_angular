import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotLoginComponent } from './pot-login.component';

describe('PotLoginComponent', () => {
  let component: PotLoginComponent;
  let fixture: ComponentFixture<PotLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
