import { Field, ID, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from "./Inventory";
import { OrderItem } from "./OrderItem";
import { ProductCategory } from "./ProductCategory";

@Entity("PRODUCT")
@ObjectType()
export class Product {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "PRODUCT_ID" })
  public ProductId: number;

  @Field((type) => Int)
  @Column("number", { nullable: true, precision: 9, scale: 2, name: "STANDARD_COST" })
  public StandardCost: number | null;

  @Field((type) => Int, { nullable: true })
  @Column("number", { nullable: true, precision: 9, scale: 2, name: "LIST_PRICE" })
  public ListPrice: number | null;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "PRODUCT_NAME" })
  public ProductName: string;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, length: 2000, name: "DESCRIPTION" })
  public Description: string | null;

  @Field((type) => ProductCategory, { nullable: true })
  @ManyToOne(() => ProductCategory, (ProductCategories: ProductCategory) => ProductCategories.Products,
    { nullable: false, onDelete: "CASCADE" }) @JoinColumn({ name: "CATEGORY_ID" })
  public Category: ProductCategory | null;

  @Field((type) => [Inventory])
  @OneToMany(() => Inventory, (Inventories: Inventory) => Inventories.Product, { onDelete: "CASCADE" })
  public Inventorys: Inventory[];

  @Field((type) => [OrderItem])
  @OneToMany(() => OrderItem, (OrderItems: OrderItem) => OrderItems.Product, { onDelete: "CASCADE" })
  public OrderItems: OrderItem[];
}
