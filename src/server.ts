import express from "express";

import { categorieRoutes } from "./routes/categories.routes";
import specificationsRoutes from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categorieRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => {
    console.log("Servidor online");
});
