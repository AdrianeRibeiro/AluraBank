class Negociacao {
    
    //_ por convenção indica que as variáveis não podem ser alteradas fora dos métodos da classe
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }

    get volume() {
        return this._quantidade * this._valor
    }
}