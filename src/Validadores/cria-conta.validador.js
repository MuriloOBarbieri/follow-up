import validator from 'validator';

export default class criaContaValidator {
  constructor(contaRepository) {
    this.contaRepository = contaRepository;

    this.validations = [
      {
        filter: ({ nome }) => validator.isEmpty(nome),
        field: 'nome',
        message: 'Nome vazio',
      },
      {
        filter: ({ senha }) => validator.isEmpty(senha),
        field: 'senha',
        message: 'Senha vazia',
      },
      {
        filter: ({ senha }) => !validator.isLength(senha, { min: 8 }),
        field: 'senha',
        message: 'Senha precisa conter 8 caracteres',
      },
      {
        filter: ({ email }) => !validator.isEmail(email),
        field: 'email',
        message: 'Email deve ser válido',
      },
      {
        filter: ({ email }) =>
          this.contaRepository
            .lista()
            .map((conta) => conta.email)
            .includes(email),
        field: 'email',
        message: 'Email ja existe',
      },
    ];
  }
  executa(nome, email, senha) {
    const validationObject = {
      temErros: false,
      erros: [],
      dados: {
        nome,
        email,
        senha,
      },
    };
    this.validations.forEach((validator) => {
      if (validator.filter({ nome, email, senha })) {
        this.#Erro(validationObject, validator);
      }
    });

    return validationObject;
  }

  #Erro(validationObject, validator) {
    validationObject.temErros = true;
    validationObject.erros.push({
      campo: validator.field,
      mensagem: validator.message,
    });
  }
}
