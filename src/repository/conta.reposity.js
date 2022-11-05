import { fs } from 'file-system';

export default class ContaRepository {
  constructor(patch = 'data/conta.json') {
    this.patch = patch;
  }

  salva(conta) {
    const listaSalva = this.lista();
    listaSalva.push(conta);

    const data = JSON.stringify(listaSalva);
    fs.writeFileSync(this.patch, data);
    return conta;
  }

  lista() {
    try {
      return JSON.parse(fs.readFileSync(this.patch));
    } catch (error) {
      return [];
    }
  }
}
