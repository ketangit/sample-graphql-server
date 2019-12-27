import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer, Employee, OrderItem } from "./index";

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
  @ManyToOne((type) => Customer, (customers) => customers.OrderEntrys,
    { nullable: false, onDelete: "CASCADE", lazy: true }) @JoinColumn({ name: "CUSTOMER_ID" })
  public Customer: Customer | null;

  @Field((type) => Employee, { nullable: true })
  @ManyToOne((type) => Employee, (employees) => employees.OrderEntrys,
    { onDelete: "SET NULL", lazy: true }) @JoinColumn({ name: "SALESMAN_ID" })
  public Salesman: Employee | null;

  @Field((type) => [OrderItem])
  @OneToMany((type) => OrderItem, (orderItems) => orderItems.Order, { onDelete: "CASCADE", lazy: true })
  public OrderItems: OrderItem[];
}
