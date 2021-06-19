import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterSaleCarouselComponent } from './winter-sale-carousel.component';

describe('WinterSaleCarouselComponent', () => {
  let component: WinterSaleCarouselComponent;
  let fixture: ComponentFixture<WinterSaleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterSaleCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterSaleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
