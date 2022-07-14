import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiberHomeComponent } from './fiber-home.component';

describe('FiberHomeComponent', () => {
  let component: FiberHomeComponent;
  let fixture: ComponentFixture<FiberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiberHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
