import { adminProcess } from './admin.js';
import { clientProcess } from './client.js';
import { getInfoAdmin, getInfoClient, getTotalAmount } from './info.js';
import { timer } from '../../index.js';
import { withoutFunds } from '../common/validations.js';

export const verifyUserType = (_userType) => {
  if (_userType === 'administrador') {
    try {
      getInfoAdmin();
      const answer = prompt('¿Desea depositar dinero? (Y)');
      if (answer === 'Y' || answer === 'y') {
        adminProcess();
        timer(20000);
      } else {
        timer(20000);
      }
    } catch (error) {
      console.error(error);
      timer(10000);
    }
  } else if(_userType === 'cliente'){
    try {
      const availableMoney = getTotalAmount();
      withoutFunds(availableMoney);
      const delivered = clientProcess();
      getInfoClient(delivered);
      timer(20000);
    } catch (error) {
      console.error(error);
      timer(10000);
    }
  }
};
