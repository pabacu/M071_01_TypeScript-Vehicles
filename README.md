Volem fer un software per un taller de vehicles de cotxes.

Descarregar-se:

Codi base: https://github.com/ITAcademyProjects/VehiclesFE
Descarregar e Instal·lar el NodeJs: https://nodejs.org/en/download/
Instal·lar typescript: npm install -g typescript
Per compilar el projecte abans d’executar tsc -w, a la carpeta on està el fitxer tsconfig.json

## Nivell 1
1) Ens donen un codi parcialment desenvolupat. És capaç de crear un cotxe i mostrar la informació a pantalla. El podem descarregar d’aquest link (https://github.com/ITAcademyProjects/VehiclesFE). Únicament caldrà modificar el fitxer index.html i el controller.ts

Modifica el projecte anterior perquè li demani a l’usuari la informació del cotxe (matrícula, la marca i el seu color) a través d’un formulari i mostri en pantalla el resultat d’una forma més elegant. Tots els camps són obligatoris (per validar-los pot utilitzar codi de pràctiques anteriors).

Pista: Es recomana crear una variable car global, fora de les funcions (i si pot ser a la línia 1 del nostre controller.ts) com per exemple let car: Car; per tal que sigui accessible des de qualsevol funció.





2) Un cop afegit el cotxe, ocultarem el fomulari i mostrarem un per afegir les quatre rodes al cotxe.





3) Millorar el codi anterior revisant que la matrícula té 4 números i 3 lletres. Cada roda té un diàmetre entre 0.4 i 2. No es podrà afegir cap roda al coche si prèviament no han estat validades les 4 rodes.


## Nivell 2
Valida els formularis utilitzant la classe 'is-invalid' de bootstrap.

## Nivell 3
Modifica el programa per poder emmagatzemar més d'un vehicle (pista: utilitza un array de Car)

Recursos
https://itacademy.barcelonactiva.cat/mod/page/view.php?id=1280
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Objectius
Iniciar-se a la programació orientada a objectes
Aplicar patrons del disseny i best practices