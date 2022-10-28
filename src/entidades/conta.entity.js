import crypto from 'crypto';
export class EntidadeConta {
  constructor(name, email, password) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.creationDate = new Date().toISOString().split('T')[0];
  }
}
