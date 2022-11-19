import { MongoClient } from 'mongodb';

export class criaConexao {
  #uri = 'mongodb://127.0.0.1:27017/?maxPoolSize=20&w=majority';

  async conecta() {
    const client = new MongoClient(this.#uri);
    try {
      await client.connect();
      console.log('Conectado com sucesso');
      return client.db('LevelUP');
    } catch (err) {
      console.log(err);
    }
  }
}
