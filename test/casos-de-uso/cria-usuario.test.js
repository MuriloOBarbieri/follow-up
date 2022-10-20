import { criaUsuario } from '../../src/casos-de-uso/cria-usuario.js';

function testarcriaUsuario() {
  console.log(criaUsuario('cria usuario', 'criausuario@mail', '87956@fgy'));
  console.log(criaUsuario('teste3', 'teste3@mail.com', 'qwertyuiop'));
  console.log(criaUsuario('teste4', 'teste4@mail.com', 'yuolsm25%'));
  console.log(
    criaUsuario(
      'murilo otavio barbieri',
      'murilo.barbieri@linainfratech.com.br',
      'dasyh5$2!'
    )
  );
}

testarcriaUsuario();
