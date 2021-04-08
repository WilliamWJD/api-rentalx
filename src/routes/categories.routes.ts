import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategorieRepository";
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";

const categorieRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categorieRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ name, description });

    return res.status(201).send();
});

categorieRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});

export { categorieRoutes };
