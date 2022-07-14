import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetNumenComponent } from './net-numen.component';

describe('NetNumenComponent', () => {
  let component: NetNumenComponent;
  let fixture: ComponentFixture<NetNumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetNumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetNumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
