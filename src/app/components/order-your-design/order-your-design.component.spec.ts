import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderYourDesignComponent } from './order-your-design.component';

describe('OrderYourDesignComponent', () => {
  let component: OrderYourDesignComponent;
  let fixture: ComponentFixture<OrderYourDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderYourDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderYourDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
