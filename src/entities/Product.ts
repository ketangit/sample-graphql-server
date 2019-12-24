import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from "./Inventory";
import { OrderItem } from "./OrderItem";
import { ProductCategory } from "./ProductCategory";

@Entity("PRODUCT")
export class Product {
  @ManyToOne(
    () => ProductCategory,
    (ProductCategories: ProductCategory) => ProductCategories.Products,
    { nullable: false, onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "CATEGORY_ID" })
  public Category: ProductCategory | null;

  @Column("number", {
    nullable: true,
    precision: 9,
    scale: 2,
    name: "STANDARD_COST"
  })
  public StandardCost: number | null;

  @PrimaryGeneratedColumn({
    type: "number",
    name: "PRODUCT_ID"
  })
  public ProductId: number;

  @Column("number", {
    nullable: true,
    precision: 9,
    scale: 2,
    name: "LIST_PRICE"
  })
  public ListPrice: number | null;

  @Column("varchar2", {
    nullable: false,
    name: "PRODUCT_NAME"
  })
  public ProductName: string;

  @Column("varchar2", {
    nullable: true,
    length: 2000,
    name: "DESCRIPTION"
  })
  public Description: string | null;

  @OneToMany(
    () => Inventory,
    (Inventories: Inventory) => Inventories.Product,
    { onDelete: "CASCADE" }
  )
  public Inventorys: Inventory[];

  @OneToMany(
    () => OrderItem,
    (OrderItems: OrderItem) => OrderItems.Product,
    { onDelete: "CASCADE" }
  )
  public OrderItems: OrderItem[];
}
