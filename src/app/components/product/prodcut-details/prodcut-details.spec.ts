import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutDetails } from './prodcut-details';

describe('ProdcutDetails', () => {
  let component: ProdcutDetails;
  let fixture: ComponentFixture<ProdcutDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdcutDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdcutDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
