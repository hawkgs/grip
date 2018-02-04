import { GripModel } from './GripModel';

import { Tires } from './Tires';
import { Suspension } from './Suspension';
import { CarBodyType } from './CarBodyType';

interface CarConfig {
  id: number;
  name: string;
  weight: number;
  tires: Tires;
  suspension: Suspension;
  body: CarBodyType;
}

export class Car implements GripModel, CarConfig {
  readonly type: string = 'Car';
  id: number;
  name: string;
  weight: number;
  tires: Tires;
  suspension: Suspension;
  body: CarBodyType;

  constructor(c: CarConfig) {
    Object.assign(this, c);
  }

  toJSON() {
    const { type, name, weight, tires, suspension, body } = this;

    return {
      type,
      name,
      weight,
      tires,
      suspension,
      body
    };
  }
}
