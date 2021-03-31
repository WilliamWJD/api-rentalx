import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategorieRepository";

const categorieRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categorieRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    categoriesRepository.create({ name, description });

    return res.status(201).send();
});

export { categorieRoutes };
