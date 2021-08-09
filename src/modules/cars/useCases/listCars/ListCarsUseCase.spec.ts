import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();

        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description",
            license_plate: "ABC-1789",
            daily_rate: 150,
            fine_amount: 150,
            brand: "Car_brand",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description",
            license_plate: "ABC-1789",
            daily_rate: 150,
            fine_amount: 150,
            brand: "Car_brand_test",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({ brand: "Car_brand_test" });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            license_plate: "ABC-1789",
            daily_rate: 150,
            fine_amount: 150,
            brand: "Car_brand_test3",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({ name: "Car3" });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car4",
            description: "Car description",
            license_plate: "ABC-1789",
            daily_rate: 150,
            fine_amount: 150,
            brand: "Car_brand_test4",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({
            category_id: "category_id",
        });

        expect(cars).toEqual([car]);
    });
});
