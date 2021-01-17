import { Negociacao } from "./Negociacao"
import { MeuObjeto } from './MeuObjeto'

export class Negociacoes implements MeuObjeto<Negociacoes> {

    private _negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao) {
        
        this._negociacoes.push(negociacao)
    }
    
    //tipando retorno de método
    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes)
    }

    paraTexto(): void {
        console.log("negociacoes", JSON.stringify(this._negociacoes))
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(this.paraArray)
    }
}