import { OrderItem } from './order-item';
import { CartItem } from './cart-item';
import { Category } from './category';
export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  publishedIn: Date;
  addedToCart: boolean;
  quantity: number;
  image: string;
  category: Category;
  cartQuantity: number;
  cartItem: CartItem;
  order_items: OrderItem[];
}
