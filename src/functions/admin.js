import { getInfoAdmin } from './info.js';
import {
  invalidAmount,
  round,
  determineDenomination,
  validateAdd,
  isNumber,
} from '../common/validations.js';

const addByDenomination = (_amount) => {
  let denomination = prompt('Ingrese el valor de la denominación');
  denomination = determineDenomination(denomination);
  validateAdd(_amount, denomination._value);
  let amount = _amount / denomination._value;
  while (amount > 0) {
    denomination.addAmount();
    amount--;
  }
  return denomination._amount;
};

export const adminProcess = () => {
  let amount = parseInt(prompt('¿Cuánto dinero desea cargar?'));
  isNumber(amount);
  invalidAmount(amount);
  amount = round(amount);
  addByDenomination(amount);
  getInfoAdmin();
};
