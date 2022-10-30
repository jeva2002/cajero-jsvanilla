import { getTotalAmount } from './info.js';
import {
  validateTotal,
  determineDenominationClient,
  validateAmount,
} from '../common/validations.js';

const deliverByDenomination = (_amount) => {
  let denomination = determineDenominationClient(_amount);
  let counter = 0;
  while (_amount >= denomination._value && denomination._amount > 0) {
    denomination.reduceAmount();
    counter = counter + 1;
    _amount -= denomination._value;
  }
  let total = counter * denomination._value;
  return {
    denomination: denomination._id,
    counter,
    total,
  };
};

const deliverMoney = (_amount) => {
  const transaction = [];
  while (_amount >= 5000) {
    let transactionByDenomination = deliverByDenomination(_amount);
    _amount -= transactionByDenomination.total;
    transaction.push([
      transactionByDenomination.denomination,
      transactionByDenomination.counter,
    ]);
  }
  return transaction;
};

export const clientProcess = () => {
  const totalBox = getTotalAmount();
  let amount = parseInt(prompt('Ingrese la cantidad que desea retirar'));
  amount = validateTotal(validateAmount(amount), totalBox);
  return deliverMoney(amount);
};
