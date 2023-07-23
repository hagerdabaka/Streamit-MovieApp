import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtSliderComponent } from './ct-slider.component';

describe('CtSliderComponent', () => {
  let component: CtSliderComponent;
  let fixture: ComponentFixture<CtSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
