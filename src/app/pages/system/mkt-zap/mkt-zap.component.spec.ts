import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktZapComponent } from './mkt-zap.component';

describe('MktZapComponent', () => {
  let component: MktZapComponent;
  let fixture: ComponentFixture<MktZapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktZapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MktZapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
