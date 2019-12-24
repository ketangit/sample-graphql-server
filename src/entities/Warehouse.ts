import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from "./Inventory";
import { Location } from "./Location";

@Entity("WAREHOUSE")
export class Warehouse {
  @PrimaryGeneratedColumn({
    type: "number",
    name: "WAREHOUSE_ID"
  })
  public WarehouseId: number;

  @ManyToOne(
    () => Location,
    (Locations: Location) => Locations.Warehouses,
    { onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "LOCATION_ID" })
  public Location: Location | null;

  @Column("varchar2", {
    nullable: true,
    name: "WAREHOUSE_NAME"
  })
  public WarehouseName: string | null;

  @OneToMany(
    () => Inventory,
    (Inventories: Inventory) => Inventories.Warehouse,
    { onDelete: "CASCADE" }
  )
  public Inventorys: Inventory[];
}
