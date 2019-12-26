import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Warehouse } from "./Warehouse";

@Entity("LOCATION")
@ObjectType()
export class Location {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "LOCATION_ID" })
  public LocationId: number;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, length: 50, name: "CITY" })
  public City: string | null;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "ADDRESS" })
  public Address: string;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, length: 50, name: "STATE" })
  public State: string | null;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, length: 20, name: "POSTAL_CODE" })
  public PostalCode: string | null;

  @Field((type) => Country, { nullable: true })
  @ManyToOne(() => Country, (Countries: Country) => Countries.Locations, { onDelete: "CASCADE" }) @JoinColumn({ name: "COUNTRY_ID" })
  public Country: Country | null;

  @Field((type) => [Warehouse])
  @OneToMany(() => Warehouse, (Warehouses: Warehouse) => Warehouses.Location, { onDelete: "CASCADE" })
  public Warehouses: Warehouse[];
}
