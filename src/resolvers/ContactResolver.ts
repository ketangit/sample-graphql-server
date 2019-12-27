import { Arg, Int, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Contact } from "../entities";

@Resolver(Contact)
export class ContactResolver {
    constructor(
        @InjectRepository(Contact) private readonly contactRepository: Repository<Contact>
    ) { }

    @Query((returns) => [Contact])
    public async contacts(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    @Query((returns) => Contact, { nullable: true })
    public async contact(@Arg("contactId", (type) => Int) contactId: number): Promise<Contact> {
        return await this.contactRepository.findOne(contactId);
    }
}
