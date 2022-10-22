
export class Product {
    constructor(
        public produto: string = "",
        public quantidade: number = 0,
        public defeito: number = 0,
        public valor: number = 0,
        public imagem: string = ""
    ) { }

    get disponiveis(): number {
        return this.quantidade - this.defeito;
    }

}