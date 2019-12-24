import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { OrderEntry } from "./OrderEntry";
import { Product } from "./Product";

@Entity("ORDER_ITEM")
export class OrderItem {
  @Column("number", {
    nullable: false,
    precision: 8,
    scale: 2,
    name: "UNIT_PRICE"
  })
  public UnitPrice: number;

  @Column("number", {
    nullable: false,
    primary: true,
    precision: 12,
    scale: 0,
    name: "ITEM_ID"
  })
  public ItemId: number;

  @ManyToOne(
    () => OrderEntry,
    (OrderEntries: OrderEntry) => OrderEntries.OrderItems,
    { primary: true, nullable: false, onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "ORDER_ID" })
  public Order: OrderEntry | null;

  @ManyToOne(
    () => Product,
    (Products: Product) => Products.OrderItems,
    { nullable: false, onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "PRODUCT_ID" })
  public Product: Product | null;

  @Column("number", {
    nullable: false,
    precision: 8,
    scale: 2,
    name: "QUANTITY"
  })
  public Quantity: number;
}
