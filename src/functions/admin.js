import { getInfoAdmin } from './info.js';
import {
  determineDenomination,
  validateAdd,
  isNumber,
  validateAmount
} from '../common/validations.js';

const addByDenomination = () => {
  let denomination = prompt('Ingrese el valor de la denominación');
  let amount = parseInt(prompt('¿Cuánto dinero desea cargar?'));
  amount = validateAmount(amount);
  denomination = determineDenomination(denomination);
  validateAdd(amount, denomination._value);
  amount = amount / denomination._value;
  while (amount > 0) {
    denomination.addAmount();
    amount--;
  }
};

const addMoney = () => {
  let denominations = parseInt(prompt("¿Cuántas denominaciones desea cargar?"));
  isNumber(denominations);
  while(denominations > 0){
    addByDenomination();
    denominations--;
  }
}


export const adminProcess = () => {
  addMoney();
  getInfoAdmin();
};
