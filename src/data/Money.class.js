export class Money {
  constructor(_id, _value, _amount) {
    (this._id = _id), (this._value = _value), (this._amount = _amount);
  }

  addAmount() {
    this._amount += 1;
  }

  reduceAmount() {
    this._amount -= 1;
  }
}