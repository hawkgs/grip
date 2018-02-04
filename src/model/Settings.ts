import { GripModel } from './GripModel';

import { Theme } from './Theme';
import { Conditions } from './Conditions';
import { Units } from './Units';

interface SettingsConfig {
  theme: Theme;
  conditions: Conditions;
  includeAeroGrip: boolean;
  units: Units;
}

export class Settings implements GripModel, SettingsConfig {
  readonly type: string = 'Settings';
  theme: Theme;
  conditions: Conditions;
  includeAeroGrip: boolean;
  units: Units;

  constructor(c: SettingsConfig) {
    Object.assign(this, c);
  }

  toJSON() {
    const { type, theme, conditions, includeAeroGrip, units } = this;

    return {
      type,
      theme,
      conditions,
      includeAeroGrip,
      units
    };
  }
}
