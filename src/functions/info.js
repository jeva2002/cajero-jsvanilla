import { moneyList } from "../data/COP.js";


const getAmountByDenomination = () => {
  const amountByDenomination = [];
  moneyList.map((element) => {
    amountByDenomination.push({
      denominacion: element._id,
      cantidad: element._amount,
    });
  });
  return amountByDenomination;
};

const getTotalByDenomination = () => {
  const totalByDenomination = [];
  for (let i = 0; i < moneyList.length; i++) {
    let amount = moneyList[i]._value * moneyList[i]._amount;
    let denomination = moneyList[i]._id;
    totalByDenomination.push([denomination, amount]);
  }
  return totalByDenomination;
};

export const getTotalAmount = () => {
  const totalByDenomination = getTotalByDenomination();
  let totalAmount = 0;
  for (let i = 0; i < totalByDenomination.length; i++) {
    totalAmount += totalByDenomination[i][1];
  }
  return totalAmount;
};

export const getInfoAdmin = () => {
  console.log("Cantidad por denominación:");
  console.table(getAmountByDenomination());
  console.log("Total por denominación");
  console.table(getTotalByDenomination());
  console.log(`El monto total es ${getTotalAmount()}`)
}

export const getInfoClient = (_delivered) => {
  console.log("Se entregan");
  console.table(_delivered);
  console.log(`El dinero restante en el cajero es ${getTotalAmount()}`);
}