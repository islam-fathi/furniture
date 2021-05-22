import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverService implements Resolve<Order[]> {

  constructor(private orderService: OrderService) {
  }

  // for admin panel
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
    return this.orderService.getOrders();
  }
}
