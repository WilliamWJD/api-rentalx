import { inject, injectable } from "tsyringe";

import IUserRepository from "@modules/accounts/repositories/IUserRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile } from "@utils/file";

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

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar;

        await this.usersRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
