import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infosection2Component } from './infosection2.component';

describe('Infosection2Component', () => {
  let component: Infosection2Component;
  let fixture: ComponentFixture<Infosection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infosection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Infosection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
