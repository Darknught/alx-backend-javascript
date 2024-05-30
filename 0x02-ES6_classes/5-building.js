// A function that implements a class Building
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setter
  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
