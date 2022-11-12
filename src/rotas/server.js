import express from 'express';

export class Server {
  static #application;
  static async start(port) {
    this.#application = express();

    this.#application.listen(port, () => {
      console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
    });
  }

  static async shutdown() {
    this.#application.close();
  }
}
