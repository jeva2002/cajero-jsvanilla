import { timer } from './src/common/timer.js';
import { verifyUserType } from './src/functions/atm.js';
import { auth } from './src/functions/auth.js';

try {
  const userAuth = parseInt(prompt('Ingrese su documento de identidad'));
  const passwordAuth = parseInt(prompt('Ingrese su contraseña'));
  verifyUserType(auth(userAuth, passwordAuth));
} catch (error) {
  console.error(error);
  timer(10000);
}
