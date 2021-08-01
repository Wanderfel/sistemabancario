class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    //METODOS
    inserir(cliente) {
        if (this.clientes.some(cl => cl.conta == cliente.conta)) {
            alert("Conta já cadastrada");
            return false;
        }
        else {
            this.clientes.push(cliente);
            return true;
        }
    }
    remover(cpf) {
        let verifica = false;
        if (this.clientes.length == 0) {
            alert("Nenhum cliente cadastrado!!!");
        }
        else {
            for (let i = 0; i < this.clientes.length; i++) {
                if (this.clientes[i].cpf == cpf) {
                    this.clientes.splice(i, 1);
                    verifica = true;
                    alert("Cliente excluido!!!");
                }
            }
            if (verifica == false) {
                alert("Cliente não encontrado!!!");
            }
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        var verifica = false;
        if (this.clientes.length == 0) {
            alert("Nenhum cliente cadastrado!!!");
        }
        else {
            for (let i = 0; i < this.clientes.length; i++) {
                if (this.clientes[i].cpf == cpf) {
                    verifica = true;
                    alert("Cliente encontrado!!!");
                    return this.clientes[i];
                }
            }
            if (verifica == false) {
                alert("Cliente não encontrado!!!");
                return null;
            }
        }
    }
}
