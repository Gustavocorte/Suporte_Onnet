import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelbrasComponent } from './intelbras.component';

describe('IntelbrasComponent', () => {
  let component: IntelbrasComponent;
  let fixture: ComponentFixture<IntelbrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelbrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelbrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
