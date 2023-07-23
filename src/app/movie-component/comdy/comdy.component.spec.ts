import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdyComponent } from './comdy.component';

describe('ComdyComponent', () => {
  let component: ComdyComponent;
  let fixture: ComponentFixture<ComdyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComdyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
