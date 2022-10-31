export class Money {
  constructor(_id, _value) {
    (this._id = _id), (this._value = _value), (this._amount = 0);
  }

  setAmount(_amount) {
    this._amount = _amount;
  }

  addAmount() {
    this._amount += 1;
  }

  reduceAmount() {
    this._amount -= 1;
  }
}
