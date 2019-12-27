import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product, Warehouse } from "./index";

@Entity("INVENTORY")
@ObjectType()
export class Inventory {
  @Field((type) => Int)
  @Column("number", { nullable: false, precision: 8, scale: 0, name: "QUANTITY" })
  public Quantity: number;

  @Field((type) => [Product], { nullable: true })
  @ManyToOne((type) => Product, (products) => products.Inventorys,
    { primary: true, nullable: false, onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "PRODUCT_ID" })
  public Product: Product | null;

  @Field((type) => [Warehouse], { nullable: true })
  @ManyToOne((type) => Warehouse, (warehouses) => warehouses.Inventorys,
    { primary: true, nullable: false, onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "WAREHOUSE_ID" })
  public Warehouse: Warehouse | null;
}
