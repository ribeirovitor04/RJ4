import { Telefone, Endereco, Cliente, Empresa } from './modulo1.js';

const enderecoEmpresa = new Endereco('Av Andrômeda', 'São José dos Campos', 'SP', '12345-678');
const empresa = new Empresa('ABC LTDA', '12.345.678/0001-99', enderecoEmpresa);
empresa.adicionarTelefone(new Telefone('99999999'));
empresa.adicionarTelefone(new Telefone('99999999'));

const clientesInfo = [
    { nome: 'João', rua: 'Av Andrômeda', numero: 987, ddd: '99999999' },
    { nome: 'Gabriel', rua: 'Av Andrômeda', numero: 412, ddd: '88888888' },
    { nome: 'Barbara', rua: 'Av São João', numero: 789, ddd: '77777777' },
    { nome: 'Márcia', rua: 'Av Andrômeda', numero: 452, ddd: '66666666' },
    { nome: 'Cláudio', rua: 'Av São Jõao', numero: 1221, ddd: '55555555'}
];

clientesInfo.forEach(info => {
    const enderecoCliente = new Endereco(info.rua, 'São José dos Campos', 'SP', info.numero);
    const cliente = new Cliente(info.nome, '123.456.789-00', enderecoCliente);
    cliente.adicionarTelefone(new Telefone(info.ddd));
    cliente.adicionarTelefone(new Telefone(info.ddd));
    empresa.adicionarCliente(cliente);
});

console.log(`Razão Social: ${empresa.nome}`);
console.log(`Nome fantasia: Mercado Online`);
console.log('----------------------');

empresa.clientes.forEach(cliente => {
    console.log(`\nNome: ${cliente.nome}`);
    console.log(`Estado: SP cidade: São José dos Campos rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}`);
    cliente.telefones.forEach(telefone => {
        console.log(`ddd: ${telefone.numero} numero: ${telefone.numero}`);
    });
});
