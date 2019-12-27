import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./index";

@Entity("PRODUCT_CATEGORY")
@ObjectType()
export class ProductCategory {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "CATEGORY_ID" })
  public CategoryId: number;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "CATEGORY_NAME" })
  public CategoryName: string;

  @Field((type) => [Product])
  @OneToMany((type) => Product, (products) => products.Category, { onDelete: "CASCADE", lazy: true })
  public Products: Product[];
}
