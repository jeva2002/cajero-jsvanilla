import { adminProcess } from './admin.js';
import { clientProcess } from './client.js';
import { getInfoAdmin, getInfoClient, getTotalAmount } from './info.js';
import { timer } from '../common/timer.js';
import { invalidAmount } from '../common/validations.js';

export const verifyUserType = (_userType) => {
  if (_userType === 'administrador') {
    getInfoAdmin();
    const answer = prompt('¿Desea depositar dinero? (Y)');
    if (answer === 'Y' || answer === 'y') {
      adminProcess();
      timer(25000);
    } else {
      timer(20000);
    }
  } else {
    const availableMoney = getTotalAmount();
    invalidAmount(availableMoney);
    const delivered = clientProcess();
    getInfoClient(delivered);
    timer(25000);
  }
};
