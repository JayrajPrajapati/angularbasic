import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCounterComponent } from './control-counter-component';

describe('ControlCounterComponent', () => {
  let component: ControlCounterComponent;
  let fixture: ComponentFixture<ControlCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlCounterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
