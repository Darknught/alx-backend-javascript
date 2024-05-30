// A function that implements a class
import Building from './5-building';
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getters for Floors
  get floors() {
    return this._floors;
  }

  evacuateWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
