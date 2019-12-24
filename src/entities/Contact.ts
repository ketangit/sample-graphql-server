import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Customer } from "./Customer";

@Entity("CONTACT")
export class Contact {
    @Column("varchar2", {
        nullable: false,
        name: "LAST_NAME"
    })
    public LastName: string;

    @Column("varchar2", {
        nullable: true,
        length: 20,
        name: "PHONE"
    })
    public Phone: string | null;

    @ManyToOne(
        () => Customer,
        (Customers: Customer) => Customers.Contacts,
        { onDelete: "CASCADE" }
    )
    @JoinColumn({ name: "CUSTOMER_ID" })
    public Customer: Customer | null;

    @Column("varchar2", {
        nullable: false,
        name: "EMAIL"
    })
    public Email: string;

    @PrimaryGeneratedColumn({
        type: "number",
        name: "CONTACT_ID"
    })
    public ContactId: number;

    @Column("varchar2", {
        nullable: false,
        name: "FIRST_NAME"
    })
    public FirstName: string;
}
