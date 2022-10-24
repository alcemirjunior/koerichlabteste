import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATIVIDADE002Component } from './atividade002.component';

describe('ATIVIDADE002Component', () => {
  let component: ATIVIDADE002Component;
  let fixture: ComponentFixture<ATIVIDADE002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATIVIDADE002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATIVIDADE002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
