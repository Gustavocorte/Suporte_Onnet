import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkSolutionsComponent } from './mk-solutions.component';

describe('MkSolutionsComponent', () => {
  let component: MkSolutionsComponent;
  let fixture: ComponentFixture<MkSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
