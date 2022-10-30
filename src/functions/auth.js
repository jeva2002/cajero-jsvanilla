import { usersList } from '../data/usersList.js';

const authenticateUser = (_userAuth) => {
  return usersList.find((element) => {
    return element.id === _userAuth;
  });
};

const authenticatePassword = (_currentUser, _passwordAuth) => {
  if (_currentUser.password === _passwordAuth) {
    return _currentUser.userType;
  } else {
    throw 'Usuario o contraseña equivocado';
  }
};

export const auth = (_userAuth, _passwordAuth) => {
  const currentUser = authenticateUser(_userAuth);
  if (!currentUser) {
    throw 'El usuario no existe';
  } else {
    return authenticatePassword(currentUser, _passwordAuth);
  }
};
