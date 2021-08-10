import Specification from "../infra/typeorm/entities/Specification";

export interface ISPecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISPecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification | undefined>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export default ISpecificationRepository;
