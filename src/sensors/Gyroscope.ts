import { Sensor } from './Sensor';

const EventName = 'deviceorientation';

export interface GyroscopeEvent {
  alphaZ: number;
  betaX: number;
  gammaY: number;
}

export class Gyroscope extends Sensor {
  private _supported;

  constructor() {
    super(EventName);
  }

  get supported() {
    return this._supported;
  }

  listen(cb: (g: GyroscopeEvent) => void) {
    super.listen((e: DeviceOrientationEvent) => {
      const { alpha, beta, gamma } = e;

      if (alpha !== null && beta !== null && gamma !== null) {
        cb({
          alphaZ: alpha,
          betaX: beta,
          gammaY: gamma
        });
        this._supported = true;
      }
    });
  }
}
