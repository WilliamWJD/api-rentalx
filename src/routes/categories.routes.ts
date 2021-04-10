import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategorieRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categorieRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categorieRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categorieRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});

export { categorieRoutes };
