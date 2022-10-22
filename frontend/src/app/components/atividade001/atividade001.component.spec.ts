import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATIVIDADE001Component } from './atividade001.component';

describe('ATIVIDADE001Component', () => {
  let component: ATIVIDADE001Component;
  let fixture: ComponentFixture<ATIVIDADE001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATIVIDADE001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATIVIDADE001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
