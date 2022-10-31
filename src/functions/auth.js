import { timer } from '../../index.js';
import { usersList } from '../data/usersList.js';

const authenticateUser = (_userAuth) => {
  const currentUser = usersList.find((element) => {
    return element.id === _userAuth;
  });
  if (!currentUser) throw 'El usuario no existe';
  else return currentUser;
};

const authenticatePassword = (_currentUser, _passwordAuth) => {
  if (_currentUser.password === _passwordAuth) return _currentUser.userType;
  else throw 'Contraseña equivocada';
};

export const auth = (_userAuth, _passwordAuth) => {
  try{
    const currentUser = authenticateUser(_userAuth);
    return authenticatePassword(currentUser, _passwordAuth);
  } catch (error){
    console.error(error);
    timer(10000);
  }
};
