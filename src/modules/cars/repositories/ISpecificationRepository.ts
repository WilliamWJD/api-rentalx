import Specification from "../entities/Specification";

export interface ISPecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISPecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification | undefined>;
}

export default ISpecificationRepository;
