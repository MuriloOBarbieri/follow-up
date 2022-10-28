import validator from 'validator';
import { EmailExiste } from '../repository/conta.reposity.js';

const validations = [
  {
    validation: ({ name }) => validator.isEmpty(name),
    field: 'name',
    message: 'preencha o nome',
  },
  {
    validation: ({ password }) => validator.isEmpty(password),
    field: 'password',
    message: 'Crie uma senha!',
  },
  {
    validation: ({ password }) => !validator.isLength(password, { min: 8 }),
    field: 'password',
    message: 'A senha deve ter no mínimo 8 caracteres',
  },
  {
    validation: ({ email }) => !validator.isEmail(email),
    field: 'email',
    message: 'O Email precisa ser valido!',
  },
  {
    validation: ({ email }) => EmailExiste(email),
    field: 'email',
    message: 'O email deve ser unico!',
  },
];

export function criaContaValidator(name, email, password) {
  const Validacao = {
    hasErrors: false,
    errors: [],
    data: {
      name,
      email,
      password,
    },
  };

  validations.forEach((validator) => {
    if (validator.validation({ name, email, password })) {
      Validacao.hasErrors = true;
      Validacao.errors.push({
        field: validator.field,
        message: validator.message,
      });
    }
  });

  return Validacao;
}
