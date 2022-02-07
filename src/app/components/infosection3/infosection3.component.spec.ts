import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infosection3Component } from './infosection3.component';

describe('Infosection3Component', () => {
  let component: Infosection3Component;
  let fixture: ComponentFixture<Infosection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infosection3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Infosection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
