import { IRentalDTO } from "@modules/rentals/dtos/IRentalDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

import { IRentalRepository } from "../IRentalRepository";

class RentalRepositoryInMemory implements IRentalRepository {
    rentals: Rental[] = [];

    async findOpenRentalByCar(car_id: string): Promise<Rental | undefined> {
        return this.rentals.find(
            (rental) => rental.car_id === car_id && !rental.end_date
        );
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental | undefined> {
        return this.rentals.find(
            (rental) => rental.user_id === user_id && !rental.end_date
        );
    }

    async create({
        user_id,
        car_id,
        expected_return_date,
    }: IRentalDTO): Promise<Rental> {
        const rental = new Rental();

        Object.assign(rental, {
            user_id,
            car_id,
            expected_return_date,
            start_date: new Date(),
        });

        this.rentals.push(rental);

        return rental;
    }
}

export { RentalRepositoryInMemory };
