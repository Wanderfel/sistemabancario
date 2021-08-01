class Clientes{

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    //METODOS

    inserir(cliente: Cliente):boolean{
        if (this.clientes.some(cl => cl.conta == cliente.conta)){
            alert("Conta já cadastrada");
            return false;
        }else{
            this.clientes.push(cliente);
            return true;
        }
    }

    remover(cpf: string):void{
        let verifica: boolean = false;
        if (this.clientes.length == 0){
            alert("Nenhum cliente cadastrado!!!");
        }else{
            for (let i = 0; i< this.clientes.length; i++){
                if (this.clientes[i].cpf == cpf){
                    this.clientes.splice(i,1);
                    verifica = true;
                    alert("Cliente excluido!!!");
                }
            }
            if(verifica == false){
                alert("Cliente não encontrado!!!");
            }
        }
    }

    listar():Cliente[]{
        return this.clientes;
    }

    pesquisar(cpf: string):Cliente|null{
        var verifica: boolean = false;
        if (this.clientes.length == 0){
            alert("Nenhum cliente cadastrado!!!");
        }else{
            for (let i = 0; i< this.clientes.length; i++){
                if (this.clientes[i].cpf == cpf){
                    verifica = true;
                    alert("Cliente encontrado!!!")
                    return this.clientes[i];
                }
            }

            if(verifica == false){
                alert("Cliente não encontrado!!!");
                return null;
            }
        }
    }
}