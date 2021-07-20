import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { listCategoriesController } from "@modules/cars/useCases/listCategories";

const categorieRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();

categorieRoutes.post("/", createCategoryController.handle);

categorieRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
});

categorieRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categorieRoutes };
