import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutList } from './prodcut-list';

describe('ProdcutList', () => {
  let component: ProdcutList;
  let fixture: ComponentFixture<ProdcutList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdcutList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdcutList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
