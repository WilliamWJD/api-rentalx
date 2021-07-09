import { inject, injectable } from "tsyringe";

import IUserRepository from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        username,
        password,
        email,
        driver_license,
    }: IRequest): Promise<void> {
        await this.userRepository.create({
            name,
            username,
            password,
            email,
            driver_license,
        });
    }
}

export default CreateUserUseCase;
