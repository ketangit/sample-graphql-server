import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Contact } from "./Contact";
import { OrderEntry } from "./OrderEntry";

@Entity("CUSTOMER")
export class Customer {
  @PrimaryGeneratedColumn({
    type: "number",
    name: "CUSTOMER_ID"
  })
  public CustomerId: number;

  @Column("number", {
    nullable: true,
    precision: 8,
    scale: 2,
    name: "CREDIT_LIMIT"
  })
  public CreditLimit: number | null;

  @Column("varchar2", {
    nullable: true,
    name: "ADDRESS"
  })
  public Address: string | null;

  @Column("varchar2", {
    nullable: false,
    name: "NAME"
  })
  public Name: string;

  @Column("varchar2", {
    nullable: true,
    name: "WEBSITE"
  })
  public Website: string | null;

  @OneToMany(
    () => Contact,
    (Contacts: Contact) => Contacts.Customer,
    { onDelete: "CASCADE" }
  )
  public Contacts: Contact[];

  @OneToMany(
    () => OrderEntry,
    (OrderEntries: OrderEntry) => OrderEntries.Customer,
    { onDelete: "CASCADE" }
  )
  public OrderEntrys: OrderEntry[];
}
