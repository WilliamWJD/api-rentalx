import ICreateUserDTO from "../dtos/ICreateUserDTO";

interface IUserRepository {
    create({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void>;
}

export default IUserRepository;
