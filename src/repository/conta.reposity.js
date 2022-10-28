import { fs } from 'file-system';

const DATA = 'data/conta.json';
let cache;

export function salva(account) {
  const salvaLista = lista();
  salvaLista.push(account);

  const conta = JSON.stringify(salvaLista);
  fs.writeFileSync(DATA, conta);
  return account;
}

export function lista() {
  if (!cache) {
    try {
      cache = JSON.parse(fs.readFileSync(DATA));
    } catch {
      cache = [];
    }
  }
  return cache;
}

export function EmailExiste(email) {
  return lista()
    .map((account) => account.email)
    .includes(email);
}
