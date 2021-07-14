import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import IUserRepository from "../../repositories/IUserRepository";

interface IRequest {
    user_id: string;
    avatar: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute({ user_id, avatar }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User not found");
        }

        user.avatar = avatar;

        await this.usersRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
