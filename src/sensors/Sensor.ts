export abstract class Sensor {
  private _ref: any;

  constructor(
    private _eventName: string
  ) {}

  listen(cb: any) {
    window.addEventListener(this._eventName, this._ref = cb);
  }

  destroy() {
    window.removeEventListener(this._eventName, this._ref);
  }
}
