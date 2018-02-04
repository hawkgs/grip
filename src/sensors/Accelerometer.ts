import { Sensor } from './Sensor';

const EventName = 'devicemotion';

export class Accelerometer extends Sensor {
  private _supported;

  constructor() {
    super(EventName);
  }

  get supported() {
    return this._supported;
  }

  listen(cb: (a: DeviceAcceleration) => void) {
    super.listen((e: DeviceMotionEvent) => {
      if (e.acceleration) {
        this._supported = true;
        cb(e.acceleration);
      }
    });
  }
}
