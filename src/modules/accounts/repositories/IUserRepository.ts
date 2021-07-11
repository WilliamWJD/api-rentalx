import ICreateUserDTO from "../dtos/ICreateUserDTO";

interface IUserRepository {
    create({
        name,
        username,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void>;
}

export default IUserRepository;
