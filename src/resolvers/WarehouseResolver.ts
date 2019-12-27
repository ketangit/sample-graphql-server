import { Arg, Int, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Warehouse } from "../entities";

@Resolver(Warehouse)
export class WarehouseResolver {
    constructor(
        @InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>
    ) { }

    @Query((returns) => [Warehouse])
    public async warehouses(): Promise<Warehouse[]> {
        return await this.warehouseRepository.find();
    }

    @Query((returns) => Warehouse, { nullable: true })
    public async warehouse(@Arg("warehouseId", (type) => Int) warehouseId: number): Promise<Warehouse> {
        return await this.warehouseRepository.findOne(warehouseId);
    }
}
