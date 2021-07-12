import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

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
            throw new Error("Token is not provided");
        }

        const [, token] = authHeader.split(" ");

        const { sub: user_id } = verify(
            token,
            "0f29667db053f1530f41e6f98c8e609b"
        ) as IPayload;

        const usersRepository = new UserRepository();

        const checkUser = await usersRepository.findById(user_id);

        if (!checkUser) {
            throw new Error("User not found");
        }

        next();
    } catch (err) {
        throw new Error("Token invalid");
    }
}
