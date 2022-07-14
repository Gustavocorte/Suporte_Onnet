import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U2000Component } from './u2000.component';

describe('U2000Component', () => {
  let component: U2000Component;
  let fixture: ComponentFixture<U2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ U2000Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(U2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
