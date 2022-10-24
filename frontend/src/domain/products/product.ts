
export class Product {
    constructor(
        public produto: string = "",
        public quantidade: number = 0,
        public defeito: number = 0,
        public valor: number = 0,
        public imagem: string = ""
    ) { }

    get available(): number {
        return this.quantidade - this.defeito;
    }

    get imageUrl(): string {
        return `assets/images/${this.imagem}`
    }
}