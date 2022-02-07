import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infosection4Component } from './infosection4.component';

describe('Infosection4Component', () => {
  let component: Infosection4Component;
  let fixture: ComponentFixture<Infosection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infosection4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Infosection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
