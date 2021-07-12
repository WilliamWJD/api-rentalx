import ICreateUserDTO from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
    create({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void>;

    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
}

export default IUserRepository;
