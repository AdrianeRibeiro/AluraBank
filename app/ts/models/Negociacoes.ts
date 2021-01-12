class Negociacoes {

    private _negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao) {
        
        this._negociacoes.push(negociacao)
    }
    
    //tipando retorno de método
    paraArray(): Negociacao[] {

        return [].concat(this._negociacoes)
    }
}