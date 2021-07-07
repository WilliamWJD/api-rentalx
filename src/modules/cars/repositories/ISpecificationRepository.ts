import Specification from "../entities/Specification";

export interface ISPecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISPecificationDTO): void;
    findByName(name: string): Specification | undefined;
}

export default ISpecificationRepository;
