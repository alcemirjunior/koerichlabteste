import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade002Component } from './atividade002.component';

describe('Atividade002Component', () => {
  let component: Atividade002Component;
  let fixture: ComponentFixture<Atividade002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
