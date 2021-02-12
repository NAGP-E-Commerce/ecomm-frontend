import { CartItem } from "./cart-item.model";

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public grossTotal: number = 0;
  public itemsTotal: number = 0;
  public totalDiscount: number = 0;
  public tax: number;
  public status: string;
  public userId: string;
  public id: number;
  public deliveryOptionId: string;
  public deliveryTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;
    this.grossTotal = src.grossTotal;
    this.itemsTotal = src.itemsTotal;
    this.totalDiscount = src.totalDiscount;
    this.tax = src.tax;
    this.status = src.status;
    this.userId = src.userId;
    this.id = src.id;
    this.deliveryOptionId = src.deliveryOptionId;
    this.deliveryTotal = src.deliveryTotal;
  }
}
