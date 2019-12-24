import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { Product } from "./Product";
import { Warehouse } from "./Warehouse";

@Entity("INVENTORY")
export class Inventory {
  @ManyToOne(
    () => Product,
    (Products: Product) => Products.Inventorys,
    { primary: true, nullable: false, onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "PRODUCT_ID" })
  public Product: Product | null;

  @Column("number", {
    nullable: false,
    precision: 8,
    scale: 0,
    name: "QUANTITY"
  })
  public Quantity: number;

  @ManyToOne(
    () => Warehouse,
    (Warehouses: Warehouse) => Warehouses.Inventorys,
    { primary: true, nullable: false, onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "WAREHOUSE_ID" })
  public Warehouse: Warehouse | null;
}
