import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntry } from "./OrderEntry";

@Entity("EMPLOYEE")
@ObjectType()
export class Employee {
  @Field((type) => ID)
  @PrimaryGeneratedColumn({ type: "number", name: "EMPLOYEE_ID" })
  public EmployeeId: number;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "JOB_TITLE" })
  public JobTitle: string;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "LAST_NAME" })
  public LastName: string;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "EMAIL" })
  public Email: string;

  @Field((type) => Date)
  @Column("date", { nullable: false, name: "HIRE_DATE" })
  public HireDate: Date;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, length: 50, name: "PHONE" })
  public Phone: string;

  @Field((type) => String)
  @Column("varchar2", { nullable: false, name: "FIRST_NAME" })
  public FirstName: string;

  @Field((type) => Employee, { nullable: true })
  @ManyToOne(() => Employee, (Employees: Employee) => Employees.Employees, { onDelete: "CASCADE" }) @JoinColumn({ name: "MANAGER_ID" })
  public Manager: Employee | null;

  @Field((type) => [Employee])
  @OneToMany(() => Employee, (Employees: Employee) => Employees.Manager, { onDelete: "CASCADE" })
  public Employees: Employee[];

  @Field((type) => [OrderEntry])
  @OneToMany(() => OrderEntry, (OrderEntries: OrderEntry) => OrderEntries.Salesman, { onDelete: "SET NULL" })
  public OrderEntrys: OrderEntry[];
}
