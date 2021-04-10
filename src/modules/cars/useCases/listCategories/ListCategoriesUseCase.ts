import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategorieRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute(): Category[] {
        const all = this.categoriesRepository.list();
        return all;
    }
}

export { ListCategoriesUseCase };
