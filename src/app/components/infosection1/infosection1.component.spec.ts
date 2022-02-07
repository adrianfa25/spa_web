import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infosection1Component } from './infosection1.component';

describe('Infosection1Component', () => {
  let component: Infosection1Component;
  let fixture: ComponentFixture<Infosection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infosection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Infosection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
