import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsByDateComponent } from './view-all-products-by-date.component';

describe('ViewAllProductsByDateComponent', () => {
  let component: ViewAllProductsByDateComponent;
  let fixture: ComponentFixture<ViewAllProductsByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProductsByDateComponent]
    });
    fixture = TestBed.createComponent(ViewAllProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
