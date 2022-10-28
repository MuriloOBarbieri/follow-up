import { criaUsuario } from '../../src/casos-de-uso/cria-usuario.js';
import randomEmail from 'random-email';

function testcriaUsuario() {
  const specificEmail = randomEmail();

  const regular = criaUsuario(
    'Murilo Otavio Barbieri',
    specificEmail,
    '123teste456'
  );

  const repeatedEmail = criaUsuario(
    'Murilo Otavio Barbieri',
    specificEmail,
    '123teste456'
  );
  const invalidEmail = criaUsuario(
    'Murilo Otavio Barbieri',
    'invalid email',
    '123teste456'
  );
  const tooShortPassword = criaUsuario(
    'Murilo Otavio Barbieri',
    randomEmail(),
    'Teste123654'
  );

  const noName = criaUsuario('', randomEmail(), '123teste456');
  const noEmail = criaUsuario('Murilo Otavio Barbieri', '', '123teste456');
  const noPassword = criaUsuario('Murilo Otavio Barbieri', randomEmail(), '');
  const noUserInfo = criaUsuario('', '', '');

  console.log('Creating account: ', regular);

  console.log('Repeated email: ', repeatedEmail);
  console.log('Invalid email: ', invalidEmail);
  console.log('Password too short: ', tooShortPassword);
  console.log('No name: ', noName);
  console.log('No email: ', noEmail);
  console.log('No password: ', noPassword);
  console.log('No user info: ', noUserInfo);
}

testcriaUsuario();
