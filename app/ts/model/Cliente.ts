class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: string;


    constructor (nome: string, cpf: string, conta: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }


    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get conta(): string {
        return this._conta;
    }

    set conta(value: string) {
        this._conta = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    toString():string{
        return `\n- Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta}`;
    }

}
