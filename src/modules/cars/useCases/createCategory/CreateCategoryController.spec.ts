import { hash } from "bcrypt";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Create category controller", () => {
    beforeAll(async () => {
        connection = await createConnection();

        const id = uuidv4();
        const password = await hash("admin", 8);
        await connection.runMigrations();

        await connection.query(
            `
                INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
                VALUES ('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXX')
            `
        );
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able to create a new category", async () => {
        const responseToken = await request(app).post("/users/sessions").send({
            email: "admin@rentx.com.br",
            password: "admin",
        });

        const { token } = responseToken.body;

        const response = await request(app)
            .post("/categories")
            .send({
                name: "Nova categoria",
                description: "Descrição do item teste",
            })
            .set({
                Authorization: `Bearer ${token}`,
            });

        expect(response.status).toBe(201);
    });

    it("should not be able to create a category already exists", async () => {
        const responseToken = await request(app).post("/users/sessions").send({
            email: "admin@rentx.com.br",
            password: "admin",
        });

        const { token } = responseToken.body;

        const response = await request(app)
            .post("/categories")
            .send({
                name: "Nova categoria",
                description: "Descrição do item teste",
            })
            .set({
                Authorization: `Bearer ${token}`,
            });

        expect(response.status).toBe(400);
    });
});
