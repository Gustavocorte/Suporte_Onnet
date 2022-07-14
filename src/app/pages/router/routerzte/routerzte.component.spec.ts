import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterzteComponent } from './routerzte.component';

describe('RouterzteComponent', () => {
  let component: RouterzteComponent;
  let fixture: ComponentFixture<RouterzteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterzteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterzteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
