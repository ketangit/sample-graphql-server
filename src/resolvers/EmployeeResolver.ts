import { Arg, Int, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Employee } from "../entities";

@Resolver(Employee)
export class EmployeeResolver {
    constructor(
        @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>
    ) { }

    @Query((returns) => [Employee])
    public async employees(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    @Query((returns) => Employee, { nullable: true })
    public async employee(@Arg("employeeId", (type) => Int) employeeId: number): Promise<Employee> {
        return await this.employeeRepository.findOne(employeeId);
    }
}
