import { EntidadeConta } from '../entidades/conta.entity.js';
import { salva } from '../repository/conta.reposity.js';
import { criaContaValidator } from '../Validadores/cria-conta.validador.js';

export function criaUsuario(name, email, password) {
  const reasultadoValida = criaContaValidator(name, email, password);
  if (reasultadoValida.hasErrors) {
    return reasultadoValida.errors.map((error) => error.message);
  }
  const novoUsuario = new EntidadeConta(name, email, password);
  return salva(novoUsuario);
}
