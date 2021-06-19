import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardFullWidthComponent } from './product-card-full-width.component';

describe('ProductCardFullWidthComponent', () => {
  let component: ProductCardFullWidthComponent;
  let fixture: ComponentFixture<ProductCardFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
