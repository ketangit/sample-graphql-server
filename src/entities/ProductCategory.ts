import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Product } from "./Product";

@Entity("PRODUCT_CATEGORY")
export class ProductCategory {
  @PrimaryGeneratedColumn({
    type: "number",
    name: "CATEGORY_ID"
  })
  public CategoryId: number;

  @Column("varchar2", {
    nullable: false,
    name: "CATEGORY_NAME"
  })
  public CategoryName: string;

  @OneToMany(
    () => Product,
    (Products: Product) => Products.Category,
    { onDelete: "CASCADE" }
  )
  public Products: Product[];
}
