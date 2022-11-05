import { criaUsuario } from '../../src/casos-de-uso/cria-usuario.js';
import {
  lista,
  salva,
  EmailExiste,
} from '../../src/repository/conta.reposity.js';
import randomEmail from 'random-email';
import { EntidadeConta } from '../../src/entidades/conta.entity.js';

function testRepository() {
  criaUsuario('cria usuario', randomEmail(), '87956@fgy');
  criaUsuario('teste3', randomEmail(), '87956@fgy');
  criaUsuario('teste4', randomEmail(), 'yuolsm25%');

  const specificEmail = randomEmail();

  salva(new EntidadeConta('teste3', specificEmail, '87956@fgy'));

  console.log('Conta Salva com sucesso:');
  console.log(lista());
  console.log(
    `O Email '${specificEmail}' Exsiste: `,
    EmailExiste(specificEmail)
  );
}

testRepository();
