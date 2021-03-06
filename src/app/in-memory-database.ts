import { Category } from './pages/categories/shared/category.model';
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataBase implements InMemoryDataBase{
createDb(){

    const categories: Category[] = [
        {id: 1, name: 'moradia', description: 'pagamento de conta de casa'},
        {id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
        {id: 3, name: 'Lazer', description: 'Cinema, Parque, Praia'},
        {id: 4, name: 'Salário', description: 'Recebimento de Salário'},
        {id: 5, name: 'Freelas', description: 'Trabalho como Freelancer'}
    ];
    return { categories }
}

}