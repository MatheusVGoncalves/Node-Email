// QUando vamos transferir um objeto de uma camada para outra, usamos o DTO. Como mudar de controller para domain; 

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}