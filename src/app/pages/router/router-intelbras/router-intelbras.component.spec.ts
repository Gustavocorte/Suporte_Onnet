import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterIntelbrasComponent } from './router-intelbras.component';

describe('RouterIntelbrasComponent', () => {
  let component: RouterIntelbrasComponent;
  let fixture: ComponentFixture<RouterIntelbrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterIntelbrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterIntelbrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
