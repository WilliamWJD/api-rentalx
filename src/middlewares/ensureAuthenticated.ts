import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new AppError("Token is not provided", 401);
        }

        const [, token] = authHeader.split(" ");

        const { sub: user_id } = verify(
            token,
            "0f29667db053f1530f41e6f98c8e609b"
        ) as IPayload;

        const usersRepository = new UserRepository();

        const checkUser = await usersRepository.findById(user_id);

        if (!checkUser) {
            throw new AppError("User not found", 401);
        }

        req.user = {
            id: user_id,
        };

        next();
    } catch (err) {
        throw new AppError("Token invalid", 401);
    }
}
