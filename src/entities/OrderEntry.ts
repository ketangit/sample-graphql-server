import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { OrderItem } from "./OrderItem";

@Entity("ORDER_ENTRY")
export class OrderEntry {
  @PrimaryGeneratedColumn({
    type: "number",
    name: "ORDER_ID"
  })
  public OrderId: number;

  @ManyToOne(
    () => Employee,
    (Employees: Employee) => Employees.OrderEntrys,
    { onDelete: "SET NULL" }
  )
  @JoinColumn({ name: "SALESMAN_ID" })
  public Salesman: Employee | null;

  @ManyToOne(
    () => Customer,
    (Customers: Customer) => Customers.OrderEntrys,
    { nullable: false, onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "CUSTOMER_ID" })
  public Customer: Customer | null;

  @Column("varchar2", {
    nullable: false,
    length: 20,
    name: "STATUS"
  })
  public Status: string;

  @Column("date", {
    nullable: false,
    name: "ORDER_DATE"
  })
  public OrderDate: Date;

  @OneToMany(
    () => OrderItem,
    (OrderItems: OrderItem) => OrderItems.Order,
    { onDelete: "CASCADE" }
  )
  public OrderItems: OrderItem[];
}
