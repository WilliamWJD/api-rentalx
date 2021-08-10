import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsCotroller = new ListCarsController();
const createCarSpecificatioController = new CreateCarSpecificationController();

carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.get("/available", listCarsCotroller.handle);

carsRoutes.post(
    "/specifications/:id",
    ensureAuthenticated,
    ensureAdmin,
    createCarSpecificatioController.handle
);

export { carsRoutes };
