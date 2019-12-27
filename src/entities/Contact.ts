import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./index";

@Entity("CONTACT")
@ObjectType()
export class Contact {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "CONTACT_ID" })
  public ContactId: number;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "LAST_NAME" })
  public LastName: string;

  @Field((type) => String, { nullable: true })
  @Column("varchar2", { nullable: true, length: 20, name: "PHONE" })
  public Phone: string | null;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "EMAIL" })
  public Email: string;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "FIRST_NAME" })
  public FirstName: string;

  @Field((type) => Customer, { nullable: true })
  @ManyToOne((type) => Customer, (customers) => customers.Contacts,
    { onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "CUSTOMER_ID" })
  public Customer: Customer | null;
}
