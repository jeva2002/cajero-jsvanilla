import { verifyUserType } from './src/functions/atm.js';
import { auth } from './src/functions/auth.js';

export const process = () => {
  const userAuth = parseInt(prompt('Ingrese su documento de identidad'));
  const passwordAuth = parseInt(prompt('Ingrese su contraseña'));
  verifyUserType(auth(userAuth, passwordAuth));
}

export const timer = (_time) => {
  console.log(`En ${_time / 1000} segundos se reiniciará la consola`);
  setTimeout(() => {
    console.clear();
    process();
  }, _time);
};

try{
  try {
    process();
  } catch (error) {
    console.error(error);
    timer(10000);
  }
} catch(error){
  console.log(error)
}
