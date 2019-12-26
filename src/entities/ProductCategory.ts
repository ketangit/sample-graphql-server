import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

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
  @OneToMany(() => Product, (Products: Product) => Products.Category, { onDelete: "CASCADE" })
  public Products: Product[];
}
