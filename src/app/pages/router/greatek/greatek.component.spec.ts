import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatekComponent } from './greatek.component';

describe('GreatekComponent', () => {
  let component: GreatekComponent;
  let fixture: ComponentFixture<GreatekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
