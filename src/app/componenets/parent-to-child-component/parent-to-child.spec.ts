import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChild } from './parent-to-child';

describe('ParentToChild', () => {
  let component: ParentToChild;
  let fixture: ComponentFixture<ParentToChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentToChild],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentToChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
