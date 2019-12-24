import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Location } from "./Location";
import { Region } from "./Region";

@Entity("COUNTRY")
export class Country {
  @Column("varchar2", {
    nullable: false,
    length: 40,
    name: "COUNTRY_NAME"
  })
  public CountryName: string;

  @Column("char", {
    nullable: false,
    primary: true,
    length: 2,
    name: "COUNTRY_ID"
  })
  public CountryId: string;

  @ManyToOne(
    () => Region,
    (Regions: Region) => Regions.Countrys,
    { onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "REGION_ID" })
  public Region: Region | null;

  @OneToMany(
    () => Location,
    (Locations: Location) => Locations.Country,
    { onDelete: "CASCADE" }
  )
  public Locations: Location[];
}
