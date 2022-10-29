import randomEmail from 'random-email';
import CriaUsuarioCasoDeUso from '../../src/casos-de-uso/cria-usuario.js';
import ContaRepository from '../../src/repository/conta.reposity.js';

function testarCriarUsuario() {
  const repository = new ContaRepository();
  const casoDeUso = new CriaUsuarioCasoDeUso(repository);

  console.log(
    '---------------------------------------------------------------'
  );
  casoDeUso.executa('Murilo', randomEmail(), '6584511');
  casoDeUso.executa('Otavio', randomEmail(), '2121212');
  casoDeUso.executa('Barbieri', randomEmail(), '4554545454');
  casoDeUso.executa('Nome', randomEmail(), '87878778');
  casoDeUso.executa('', '', '62718925');
  console.log('Usuario cadastrado com sucesso');
  console.log(
    '---------------------------------------------------------------'
  );
}

testarCriarUsuario();
