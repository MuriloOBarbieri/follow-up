import criaContaValidator from '../Validadores/cria-conta.validador.js';
import EntidadeConta from '../entidades/conta.entity.js';

export default class CriaUsuarioCasoDeUso {
  constructor(contaRepository) {
    this.contaRepository = contaRepository;
    this.criaValidador = new criaContaValidator(this.contaRepository);
  }
  executa(nome, email, senha) {
    const validation = this.criaValidador.executa(nome, email, senha);
    if (validation.temErros) {
      return validation.erros.map((erro) => erro.mensagem);
    }

    const novoUsuario = new EntidadeConta(nome, email, senha);
    return this.contaRepository.salva(novoUsuario);
  }
}
