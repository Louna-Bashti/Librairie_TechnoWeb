// un livre
export default class Livre {
  constructor(id, titre, qtestock, prix) {
    this._qtestock = qtestock;
    this._titre = titre;
    this._id = id;
    this._prix = prix;
  }
  get titre() {
    return this._titre;
  }
  get id() {
    return this._id;
  }
  get qtestock() {
    return this._qtestock;
  }

  // modifier le texte
  set titre(titre) {
    this._titre = titre;
  }
  pourAfficher() {
    return `--> ${this._titre} (${this._qtestock})`;
  }
}
