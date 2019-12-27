import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./index";

@Entity("REGION")
@ObjectType()
export class Region {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "REGION_ID" })
  public RegionId: number;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, length: 50, name: "REGION_NAME" })
  public RegionName: string;

  @Field((type) => [Country])
  @OneToMany((type) => Country, (countries) => countries.Region, { onDelete: "CASCADE", lazy: true })
  public Countrys: Country[];
}
