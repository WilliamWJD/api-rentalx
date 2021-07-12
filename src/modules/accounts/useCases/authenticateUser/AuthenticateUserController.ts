import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AthenticateUserUseCase";

class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );

        const authenticateUser = await authenticateUserUseCase.execute({
            email,
            password,
        });

        return res.status(201).json(authenticateUser);
    }
}

export default AuthenticateUserController;
