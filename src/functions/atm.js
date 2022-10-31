import { adminProcess } from "./admin.js";
import { clientProcess } from "./client.js";
import { getInfoAdmin, getInfoClient, getTotalAmount } from "./info.js";
import { timer } from "../../index.js";
import { withoutFunds } from "../common/validations.js";

const admin = () => {
  getInfoAdmin();
  const answer = prompt("¿Desea depositar dinero? (Y)");
  if (answer === "Y" || answer === "y") {
    adminProcess();
    timer(20000);
  } else timer(20000);
}

const client = () => {
  const availableMoney = getTotalAmount();
  withoutFunds(availableMoney);
  const delivered = clientProcess();
  getInfoClient(delivered);
  timer(20000);
}

export const verifyUserType = (_userType) => {
  try {
    if (_userType === "administrador") admin();      
    else if (_userType === "cliente") client();
  } catch (error) {
    console.error(error);
    timer(10000);
  }
};
