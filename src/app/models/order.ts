import { Invoice } from './invoice';
import { OrderItem } from './order-item';
import { User } from './user';
import { OrderStatus } from './../enums/order-status.enum';
export class Order {
  id: number;
  order_date: Date;
  status: OrderStatus;
  shipmentDate: Date;
  comments: string;
  shippedTo: string;
  user: User;
  order_item: OrderItem[];
  invoice: Invoice;
  invoiceId: number;
}
