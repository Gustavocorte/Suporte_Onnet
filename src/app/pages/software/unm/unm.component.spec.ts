import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmComponent } from './unm.component';

describe('UnmComponent', () => {
  let component: UnmComponent;
  let fixture: ComponentFixture<UnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
