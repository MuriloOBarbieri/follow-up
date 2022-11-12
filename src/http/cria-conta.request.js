export class CriaContaRequest {
  #CriausuarioUseCase;

  constructor(CriausuarioUseCase) {
    this.#CriausuarioUseCase = CriausuarioUseCase;
  }

  async execute(req, res) {
    const { name, email, password } = req.body;
    const CriaUsuarioResult = await this.#CriausuarioUseCase.execute(
      name,
      email,
      password
    );

    if (Array.isArray(CriaUsuarioResult)) {
      res.status(400).send(CriaUsuarioResult);
    } else {
      res.status(201).send(CriaUsuarioResult.toLiteral());
    }
  }
}
