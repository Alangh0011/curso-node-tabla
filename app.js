//const fs = require('fs');

//const { isNull } = require('util');
//const { demandOption, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado' ))
   .catch( err => console.log(err));

/*
const argv = require('yargs')
               .option('b', {
                  alias: 'base',
                  type:'number',
                  demandOption: true 
               })
               .option('l', {
                  alias: 'listado',
                  type:'boolean',
                  demandOption: true,
                  default: false
               })
               .check((argv, option) => {
                  if( isNaN( argv.b )){
                     throw 'La base tiene que ser un numero'
                  }
                  return true;
               })
               .argv;
               
               
console.log( 'base: yargs',argv.b );
console.log( 'listado: yargs',argv.l );
*/
/*
const [ , ,arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');

//console.log( base );

*/




/*
let salida = '';

for (let i = 1; i < 11; i++) {
    
    salida += (`${ base } X ${ i } = ${ base * i }\n`);
 }

 fs.writeFile( `tabla-${ base }.txt`,salida );

 console.log(`tabla-${ base }.txt creado`);


 fs.writeFile( `tabla-${ base }.txt`, salida, () => {
    if (err) throw err;

    console.log(`tabla-${ base }.txt creado`);
 } )
 */