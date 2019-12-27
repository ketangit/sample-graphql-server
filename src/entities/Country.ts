import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Location, Region } from "./index";

@Entity("COUNTRY")
@ObjectType()
export class Country {
  @Field((type) => String)
  @Column("varchar2", { nullable: false, length: 40, name: "COUNTRY_NAME" })
  public CountryName: string;

  @Field((type) => String)
  @Column("char", { nullable: false, primary: true, length: 2, name: "COUNTRY_ID" })
  public CountryId: string;

  @Field((type) => Region, { nullable: true })
  @ManyToOne(() => Region, (regions) => regions.Countrys, { onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "REGION_ID" })
  public Region: Region | null;

  @Field((type) => [Location])
  @OneToMany((type) => Location, (locations) => locations.Country, { onDelete: "CASCADE", lazy: true })
  public Locations: Location[];
}
