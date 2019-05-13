import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataBase implements InMemoryDataBase{
createDb(){

    const categories = [
        {id: 1, name: 'moradia', description: 'pagamento de conta de casa'},
        {id: 1, name: 'Saúde', description: 'Plano de saúde e remédios'},
        {id: 1, name: 'Lazer', description: 'Cinema, Parque, Praia'},
        {id: 1, name: 'Salário', description: 'Recebimento de Salário'},
        {id: 1, name: 'Freelas', description: 'Trabalho como Freelancer'}
    ];
    return { categories }
}

}