import Specification from "@modules/cars/infra/typeorm/entities/Specification";

import ISpecificationRepository, {
    ISPecificationDTO,
} from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
    specifications: Specification[] = [];

    async create({
        name,
        description,
    }: ISPecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);

        return specification;
    }

    async findByName(name: string): Promise<Specification | undefined> {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter((specification) =>
            ids.includes(specification.id as string)
        );

        return allSpecifications;
    }
}

export { SpecificationRepositoryInMemory };
