import { GripModel } from './GripModel';

import { Car } from './Car';
import { Settings } from './Settings';

interface DataStoreConfig {
  selectedCar: Car | null;
  cars: Car[];
  settings: Settings;
}

export class DataStore implements GripModel, DataStoreConfig {
  readonly type: string = 'DataStore';
  selectedCar: Car | null;
  cars: Car[];
  settings: Settings;

  constructor(c: DataStoreConfig) {
    Object.assign(this, c);
  }

  toJSON() {
    return {
      type: this.type,
      selectedCar: this.selectedCar ? this.selectedCar.toJSON() : null,
      cars: this.cars.map(c => c.toJSON()),
      settings: this.settings.toJSON()
    };
  }
}
