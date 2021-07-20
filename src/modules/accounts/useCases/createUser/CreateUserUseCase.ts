import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import IUserRepository from "@modules/accounts/repositories/IUserRepository";

interface IRequest {
    name: string;
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
        password,
        email,
        driver_license,
    }: IRequest): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        await this.userRepository.create({
            name,
            password: await hash(password, 8),
            email,
            driver_license,
        });
    }
}

export default CreateUserUseCase;
