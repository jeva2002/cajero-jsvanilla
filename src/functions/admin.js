import { getInfoAdmin } from './info.js';
import {
  determineDenomination,
  validateAdd,
  isNumber,
  validateAmount,
  validateAmountDenominations
} from '../common/validations.js';

const addByDenomination = () => {
  let denomination = prompt('Ingrese el valor de la denominación');
  denomination = determineDenomination(denomination);
  let amount = parseInt(prompt('¿Cuánto dinero desea cargar?'));
  amount = validateAmount(amount);
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
  validateAmountDenominations(denominations);
  while(denominations > 0){
    addByDenomination();
    denominations--;
  }
}


export const adminProcess = () => {
  addMoney();
  getInfoAdmin();
};
