import { criaConexao } from '../infra/conexao-banco';

export class ContaRepository {
  #criaConexao = new criaConexao();

  async salvar(conta) {
    const conexao = await this.#criaConexao.conecta();

    const contaCriada = conexao.collection('contas').insertOne({
      ...conta,
    });

    return contaCriada;
  }

  async listar() {
    const conexao = await this.#criaConexao.conecta();

    return await conexao.collection('contas').find({}).toArray();
  }
}
