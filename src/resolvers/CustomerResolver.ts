import { Arg, Int, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Customer } from "../entities";

@Resolver(Customer)
export class CustomerResolver {
    constructor(
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>
    ) { }

    @Query((returns) => [Customer])
    public async customers(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    @Query((returns) => Customer, { nullable: true })
    public async customer(@Arg("customerId", (type) => Int) customerId: number): Promise<Customer> {
        return await this.customerRepository.findOne(customerId);
    }
}
