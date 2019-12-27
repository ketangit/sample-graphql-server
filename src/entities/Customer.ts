import { Field, ID, Int, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact, OrderEntry } from "./index";

@Entity("CUSTOMER")
@ObjectType()
export class Customer {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "CUSTOMER_ID" })
  public CustomerId: number;

  @Field((type) => Int)
  @Column("number", { nullable: true, precision: 8, scale: 2, name: "CREDIT_LIMIT" })
  public CreditLimit: number | null;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, name: "ADDRESS" })
  public Address: string | null;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "NAME" })
  public Name: string;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, name: "WEBSITE" })
  public Website: string | null;

  @Field((type) => [Contact])
  @OneToMany((type) => Contact, (contacts) => contacts.Customer, { onDelete: "CASCADE", lazy: true })
  public Contacts: Contact[];

  @Field((type) => [OrderEntry])
  @OneToMany((type) => OrderEntry, (orderEntries) => orderEntries.Customer, { onDelete: "CASCADE", lazy: true })
  public OrderEntrys: OrderEntry[];
}
