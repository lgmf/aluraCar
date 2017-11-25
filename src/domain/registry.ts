import { Car } from "./car";

export class Registry {
    constructor(
        public carro: Car = null,
        public precoTotal: number = 0,
        public nome: string = '',
        public email: string = '',
        public dataAgendamento: string = new Date().toISOString(),
        public endereco: string = ''
    ) { }
}