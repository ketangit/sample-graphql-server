import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { OrderItem } from "./OrderItem";

@Entity("ORDER_ENTRY")
@ObjectType()
export class OrderEntry {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "ORDER_ID" })
  public OrderId: number;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, length: 20, name: "STATUS" })
  public Status: string;

  @Field((type) => Date)
  @Column("date", { nullable: false, name: "ORDER_DATE" })
  public OrderDate: Date;

  @Field((type) => Customer, { nullable: true })
  @ManyToOne(() => Customer, (Customers: Customer) => Customers.OrderEntrys,
    { nullable: false, onDelete: "CASCADE" }) @JoinColumn({ name: "CUSTOMER_ID" })
  public Customer: Customer | null;

  @Field((type) => Employee, { nullable: true })
  @ManyToOne(() => Employee, (Employees: Employee) => Employees.OrderEntrys,
    { onDelete: "SET NULL" }) @JoinColumn({ name: "SALESMAN_ID" })
  public Salesman: Employee | null;

  @Field((type) => [OrderItem])
  @OneToMany(() => OrderItem, (OrderItems: OrderItem) => OrderItems.Order, { onDelete: "CASCADE" })
  public OrderItems: OrderItem[];
}
