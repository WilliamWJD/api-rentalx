import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategorieRepository";

const categorieRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categorieRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return res.status(400).json({ error: "Category alredy exists!" });
    }

    categoriesRepository.create({ name, description });

    return res.status(201).send();
});

categorieRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});

export { categorieRoutes };
