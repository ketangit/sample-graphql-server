import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory, Location } from "./index";

@Entity("WAREHOUSE")
@ObjectType()
export class Warehouse {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "WAREHOUSE_ID" })
  public WarehouseId: number;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, name: "WAREHOUSE_NAME" })
  public WarehouseName: string | null;

  @Field((type) => Location, { nullable: true })
  @ManyToOne(() => Location, (Locations: Location) => Locations.Warehouses,
    { onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "LOCATION_ID" })
  public Location: Location | null;

  @Field((type) => [Inventory])
  @OneToMany((type) => Inventory, (inventories) => inventories.Warehouse, { onDelete: "CASCADE", lazy: true })
  public Inventorys: Inventory[];
}
