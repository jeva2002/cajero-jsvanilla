export const timer = (_time) => {
  console.log(`En ${_time / 1000} segundos se reiniciará la pantalla`);
  setTimeout(() => {
    window.location.reload();
  }, _time);
}