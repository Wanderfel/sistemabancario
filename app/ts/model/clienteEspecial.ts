class ClienteEspecial extends Cliente{

    private depedentes: Array<Cliente>;

    constructor(nome: string, cpf:string, conta: string) {
        super(nome, cpf, conta);
        this.depedentes = new Array<Cliente>();
    }
}