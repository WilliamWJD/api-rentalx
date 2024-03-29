import { hash } from "bcrypt";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("List categories", () => {
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

    it("should be able to list all categories", async () => {
        const responseToken = await request(app).post("/users/sessions").send({
            email: "admin@rentx.com.br",
            password: "admin",
        });

        const { token } = responseToken.body;

        await request(app)
            .post("/categories")
            .send({
                name: "Categoria teste",
                description: "Descrição do item teste",
            })
            .set({
                Authorization: `Bearer ${token}`,
            });

        const response = await request(app)
            .get("/categories")
            .set({
                Authorization: `Bearer ${token}`,
            });

        expect(response.status).toBe(201);
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0].name).toEqual("Categoria teste");
    });
});
