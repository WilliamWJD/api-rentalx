import { IRentalDTO } from "../dtos/IRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

interface IRentalRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental | undefined>;
    findOpenRentalByUser(user_id: string): Promise<Rental | undefined>;
    create(data: IRentalDTO): Promise<Rental>;
}

export { IRentalRepository };
