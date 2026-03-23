import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailRegister } from './gmail-register';

describe('GmailRegister', () => {
  let component: GmailRegister;
  let fixture: ComponentFixture<GmailRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmailRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(GmailRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
