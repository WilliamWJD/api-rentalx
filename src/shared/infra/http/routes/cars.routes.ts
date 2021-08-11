import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";
import { UploadCarImageController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));

const createCarController = new CreateCarController();
const listCarsCotroller = new ListCarsController();
const createCarSpecificatioController = new CreateCarSpecificationController();
const uploadCarsImagesConrtoller = new UploadCarImageController();

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

carsRoutes.post(
    "/:id/images",
    ensureAuthenticated,
    ensureAdmin,
    upload.array("images"),
    uploadCarsImagesConrtoller.handle
);

export { carsRoutes };
