import express from "express";

import { categorieRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categorieRoutes);

app.listen(3333, () => {
    console.log("Servidor online");
});
