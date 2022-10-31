# cajero-jsvanilla

Es una aplicación que intenta simular un cajero según ciertos requisitos dados. La aplicación está escrita con algo de HTML, 
sólo CSS para un msg guía y casi su totalidad es JS vanilla con sintaxis modernas de ES. Se intentó que el código permaneciese
limpio por lo que se trabajó con bloques pequeños de código y módulos. Se intentó controlar la mayor cantidad de errores posibles
para que la aplicación mantuviese su funcionamiento. Al no trabajar con el localStorage la aplicación sólo funciona con la 
memoria de la sesión. 

La aplicación en un principio pide un id de usuario y valida que exista, después pide su contraseña y la verifica. Si son correctos
dependiendo del tipo de usuario (Administrador o Cliente) actúa. 
Para el admin, muestra el dinero disponible; valor y cantidad por denominación y el total disponible, en la primera inicialización
el cajero está vacío, y se pregunta si quiere cargar dinero, si la respuesta es afirmativa se pregunta cuántas denominaciones desea 
cargar. Posteriormente se pregunta por la denominación y por la cuantía varias veces, según la cantidad de denominaciones dadas. 
Resuelto esto se muestra de nuevo el dinero disponible ya actualizado y se da un tiempo para que el programa se reinicie pidiendo 
nuevamente la sesión.
Para el cliente, se pide la cantidad a retirar, se responde la cantidad posible para la transacción. Se realiza la transacción,
se muestra la cantidad total de dinero restante en el cajero y, por último da un tiempo para el reinicio de la sesión.

NOTA la aplicación al estar modularizada puede resultar un error al abrirla directamente con el navegador por lo que se sugiere su 
acceso con la extensión live server de VSC. Al iniciar la aplicación surge un modal y en el Document aparece un msg guía. Para
el correcto funcionamiento de la aplicación se deberán saltar los dos modales que surgen y recargar la ventana. 
