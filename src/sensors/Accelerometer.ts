import { Sensor } from './Sensor';

const EventName = 'devicemotion';

export type AccelerationEvent = DeviceAcceleration;

export class Accelerometer extends Sensor {
  constructor() {
    super(EventName);
  }

  listen(cb: (a: AccelerationEvent | null) => void) {
    super.listen((e: DeviceMotionEvent) => {
      if (e.acceleration) {
        cb(e.acceleration);
      } else {
        cb(null);
      }
    });
  }
}
