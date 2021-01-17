import { MeuObjeto } from './MeuObjeto'
export class Negociacao implements MeuObjeto<Negociacao> {
    
    //_variable por convenção indica que as variáveis não podem ser alteradas fora dos métodos da classe
    // posso substituir o private e o get por readonly
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor
    }

    paraTexto(): void {
        console.log(
            `
                Data: ${this.data},
                Quantidade: ${this.quantidade},
                Valor: ${this.valor},
                Volume: ${this.volume}
            `
        )
    }

    ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate() 
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear()
    }
}