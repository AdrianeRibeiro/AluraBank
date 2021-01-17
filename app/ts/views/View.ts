//<T> classe que trabalha com tipo genérico
//classe abstrata não pode ser instanciada
import { logarTempoDeExecucao } from "../helpers/decorators/index"
export abstract class View<T> {

    private _elemento: JQuery
    private _escapar: boolean

    //querySelector retorna um element
    //escapar?: ? indica que o parâmetro é opcional. Parâmetros opcionais devem vir no final
    constructor(selector: string, escapar: boolean = false) {
        this._elemento = $(selector)
        this._escapar = escapar
    }

    @logarTempoDeExecucao(true)
    update(model: T) {
        let template = this.template(model)

        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(this.template(model))
    }

    //classe filha é obrigada a sobrescrever esse método
    abstract template(model: T): string
}