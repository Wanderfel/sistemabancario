let clienteController = new ClienteController();
clienteController.listar();

//CLIENTES

const clientes = new Clientes();

const cliente1 = new Cliente('Ismael', '1111', '123');
const cliente2 = new Cliente('Marcos', '2222', '456');
const cliente3 = new Cliente('Romero', '3333', '789');

//METODO INSERIR
clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

//METODO LISTAR

let listagem = clientes.listar().toString();
console.log(listagem);

//METODO PESQUISAR

//CPF EXISTENTE
let clientePesquisado =  clientes.pesquisar('1111');
console.log(clientePesquisado);

//CPF INEXISTENTE

let clientePesquisado2 =  clientes.pesquisar('22223');
console.log(clientePesquisado2);

//METODO REMOVER

//CPF EXISTENTE
clientes.remover('1111');
let listagem2 = clientes.listar().toString();
console.log(listagem2);


//CPF INEXISTENTE
clientes.remover('11113')