//<T> classe que trabalha com tipo genérico
//classe abstrata não pode ser instanciada
abstract class View<T> {

    private _elemento: JQuery

    //querySelector retorna um element
    constructor(selector: string) {

        this._elemento = $(selector)
    }

    update(model: T) {
        this._elemento.html(this.template(model))
    }

    //classe filha é obrigada a sobrescrever esse método
    abstract template(model: T): string
}