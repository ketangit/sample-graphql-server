import { Field, ID, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory, OrderItem, ProductCategory } from "./index";

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
  @ManyToOne((type) => ProductCategory, (productCategories) => productCategories.Products,
    { nullable: false, onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "CATEGORY_ID" })
  public Category: ProductCategory | null;

  @Field((type) => [Inventory])
  @OneToMany((type) => Inventory, (inventories) => inventories.Product, { onDelete: "CASCADE", lazy: true })
  public Inventorys: Inventory[];

  @Field((type) => [OrderItem])
  @OneToMany((type) => OrderItem, (orderItems) => orderItems.Product, { onDelete: "CASCADE", lazy: true })
  public OrderItems: OrderItem[];
}
