import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { OrderEntry, Product } from "./index";

@Entity("ORDER_ITEM")
@ObjectType()
export class OrderItem {
  @Column("number", { nullable: false, precision: 8, scale: 2, name: "UNIT_PRICE" })
  public UnitPrice: number;

  @Field((type) => Int)
  @Column("number", { nullable: false, primary: true, precision: 12, scale: 0, name: "ITEM_ID" })
  public ItemId: number;

  @Field((type) => Int)
  @Column("number", { nullable: false, precision: 8, scale: 2, name: "QUANTITY" })
  public Quantity: number;

  @Field((type) => OrderEntry, { nullable: true })
  @ManyToOne((type) => OrderEntry, (orderEntries) => orderEntries.OrderItems,
    { primary: true, nullable: false, onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "ORDER_ID" })
  public Order: OrderEntry | null;

  @Field((type) => Product, { nullable: true })
  @ManyToOne((type) => Product, (products) => products.OrderItems,
    { nullable: false, onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "PRODUCT_ID" })
  public Product: Product | null;
}
