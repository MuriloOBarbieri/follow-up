import crypto from 'crypto';

export function criaUsuario(nome, email, senha) {
  return {
    id: crypto.randomUUID(),
    nome,
    email,
    senha,
    dataCriacao: new Date().toISOString().split('T')[0],
  };
}
