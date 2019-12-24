import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntry } from "./OrderEntry";

@Entity("EMPLOYEE")
export class Employee {
  @PrimaryGeneratedColumn({
    type: "number",
    name: "EMPLOYEE_ID"
  })
  public EmployeeId: number;

  @Column("varchar2", {
    nullable: false,
    name: "JOB_TITLE"
  })
  public JobTitle: string;

  @Column("varchar2", {
    nullable: false,
    name: "LAST_NAME"
  })
  public LastName: string;

  @Column("varchar2", {
    nullable: false,
    name: "EMAIL"
  })
  public Email: string;

  @Column("date", {
    nullable: false,
    name: "HIRE_DATE"
  })
  public HireDate: Date;

  @Column("varchar2", {
    nullable: false,
    length: 50,
    name: "PHONE"
  })
  public Phone: string;

  @ManyToOne(
    () => Employee,
    (Employees: Employee) => Employees.Employees,
    { onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "MANAGER_ID" })
  public Manager: Employee | null;

  @Column("varchar2", {
    nullable: false,
    name: "FIRST_NAME"
  })
  public FirstName: string;

  @OneToMany(
    () => Employee,
    (Employees: Employee) => Employees.Manager,
    { onDelete: "CASCADE" }
  )
  public Employees: Employee[];

  @OneToMany(
    () => OrderEntry,
    (OrderEntries: OrderEntry) => OrderEntries.Salesman,
    { onDelete: "SET NULL" }
  )
  public OrderEntrys: OrderEntry[];
}
