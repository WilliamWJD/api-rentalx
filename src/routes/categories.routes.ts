import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categorieRoutes = Router();

categorieRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categorieRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
});

export { categorieRoutes };
