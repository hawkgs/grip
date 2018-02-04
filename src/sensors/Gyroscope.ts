import { Sensor } from './Sensor';

const EventName = 'deviceorientation';

export interface GyroscopeEvent {
  alphaZ: number;
  betaX: number;
  gammaY: number;
}

export class Gyroscope extends Sensor {
  constructor() {
    super(EventName);
  }

  listen(cb: (g: GyroscopeEvent | null) => void) {
    super.listen((e: DeviceOrientationEvent) => {
      const { alpha, beta, gamma } = e;

      if (alpha !== null && beta !== null && gamma !== null) {
        cb({
          alphaZ: alpha,
          betaX: beta,
          gammaY: gamma
        });
      } else {
        cb(null);
      }
    });
  }
}
