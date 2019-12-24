import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Country } from "./Country";
import { Warehouse } from "./Warehouse";

@Entity("LOCATION")
export class Location {
  @Column("varchar2", {
    nullable: true,
    length: 50,
    name: "CITY"
  })
  public City: string | null;

  @ManyToOne(
    () => Country,
    (Countries: Country) => Countries.Locations,
    { onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "COUNTRY_ID" })
  public Country: Country | null;

  @Column("varchar2", {
    nullable: false,
    name: "ADDRESS"
  })
  public Address: string;

  @Column("varchar2", {
    nullable: true,
    length: 50,
    name: "STATE"
  })
  public State: string | null;

  @PrimaryGeneratedColumn({
    type: "number",
    name: "LOCATION_ID"
  })
  public LocationId: number;

  @Column("varchar2", {
    nullable: true,
    length: 20,
    name: "POSTAL_CODE"
  })
  public PostalCode: string | null;

  @OneToMany(
    () => Warehouse,
    (Warehouses: Warehouse) => Warehouses.Location,
    { onDelete: "CASCADE" }
  )
  public Warehouses: Warehouse[];
}
