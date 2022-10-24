import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATIVIDADE003Component } from './atividade003.component';

describe('ATIVIDADE003Component', () => {
  let component: ATIVIDADE003Component;
  let fixture: ComponentFixture<ATIVIDADE003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATIVIDADE003Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATIVIDADE003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
