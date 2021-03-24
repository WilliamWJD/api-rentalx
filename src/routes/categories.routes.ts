import { Router } from "express";

const categorieRoutes = Router();

const categories = [];

categorieRoutes.post("/categories", (req, res) => {
    const { name, description } = req.body;

    categories.push({
        name,
        description,
    });

    return res.status(201).send();
});

export { categorieRoutes };
