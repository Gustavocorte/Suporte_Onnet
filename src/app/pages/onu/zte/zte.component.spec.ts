import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZteComponent } from './zte.component';

describe('ZteComponent', () => {
  let component: ZteComponent;
  let fixture: ComponentFixture<ZteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
