import ICreateUserDTO from "@modules/accounts/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import CreateUserUseCase from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AthenticateUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userRepositoryInMemory
        );

        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            name: "Teste",
            email: "user@email.com",
            password: "123456",
            driver_license: "000123",
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate an non existent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "user@email.com",
                password: "123456",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate an user with incorrect password", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "Teste",
                email: "user@email.com",
                password: "123456",
                driver_license: "000123",
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: "user@email.com",
                password: "123",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
