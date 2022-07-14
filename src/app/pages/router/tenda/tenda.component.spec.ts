import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendaComponent } from './tenda.component';

describe('TendaComponent', () => {
  let component: TendaComponent;
  let fixture: ComponentFixture<TendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
