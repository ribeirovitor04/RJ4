class Telefone {
    constructor(numero) {
        this.numero = numero;
    }
}

class Endereco {
    constructor(rua, cidade, estado, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
}

class Cliente {
    #cpf;
    
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = [];
    }

    getCpf() {
        return this.#cpf;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
}

class Empresa {
    #cnpj;

    constructor(nome, cnpj, endereco) {
        this.nome = nome;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = [];
        this.telefones = [];
    }

    getCnpj() {
        return this.#cnpj;
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
}

export { Telefone, Endereco, Cliente, Empresa };
