import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Country } from "./Country";

@Entity("REGION")
export class Region {
  @PrimaryGeneratedColumn({
    type: "number",
    name: "REGION_ID"
  })
  public RegionId: number;

  @Column("varchar2", {
    nullable: false,
    length: 50,
    name: "REGION_NAME"
  })
  public RegionName: string;

  @OneToMany(
    () => Country,
    (Countries: Country) => Countries.Region,
    { onDelete: "CASCADE" }
  )
  public Countrys: Country[];
}
