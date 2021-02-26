/* 维护一个 callback 数组，并且监听到事件后全部触发 */
class Event {
  constructor(sender) {
    this._sender = sender;
    this._listeners = [];
  }

  attach(callback) {
    this._listeners.push(callback);
  }

  notify(args) {
    this._listeners.forEach(listener => {
      listener(this._sender, args);
    });
  }
}

export default Event;
