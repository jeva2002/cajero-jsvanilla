import { timer } from "./timer.js";
import { cienCOP, cincuentaCOP, veinteCOP, diezCOP, cincoCOP } from "../data/COP.js";

export const invalidAmount = (_amount) => {
  if(_amount < 5000){
    throw "El cajero no admite cifras menores a 5000"
  } 
  return _amount;
}

export const validateTotal = (_amount, _totalBox) => {
  if(_amount > _totalBox){
    _amount = _totalBox;
  }
  console.log(`Se puede entregar ${_amount}`);
  return _amount;
}

export const round = (_amount) => {
  if(_amount % 1000 !== 0){
    console.log(`El cajero no recibe cifras menores a 5000`);
    if(_amount % 10000 <= 4999 && _amount % 10000 > 0){
      console.log(`Sobran ${_amount % 10000}`);
      _amount -= _amount % 10000;
    }
    if(_amount % 10000 <= 9999 && _amount % 10000 > 5000){
      console.log(`Sobran ${(_amount % 10000)-5000}`);
      _amount = (((Math.floor(_amount / 10000)) *10000) + 5000); 
    }
  }
  return _amount;
}

export const determineDenomination = (_value) => {
  if (_value >= 100000 && cienCOP._amount > 0) {
    return cienCOP;
  } else if (_value >= 50000 && cincuentaCOP._amount > 0) {
    return cincuentaCOP;
  } else if (_value >= 20000 && veinteCOP._amount > 0) {
    return veinteCOP;
  } else if (_value >= 10000 && diezCOP._amount > 0) {
    return diezCOP;
  } else if (_value >= 5000 && cincoCOP._amount > 0) {
    return cincoCOP;
  } else {
    throw "Inserte una denominación válida";
  }
};