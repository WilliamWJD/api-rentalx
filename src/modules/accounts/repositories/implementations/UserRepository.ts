import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUserDTO } from "../IUserRepository";

class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        username,
        password,
        email,
        driver_license,
    }: IUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            password,
            email,
            driver_license,
        });

        await this.repository.save(user);
    }
}

export { UserRepository };
