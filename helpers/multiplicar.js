const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida  = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++ ) {
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('===================='.green);
            console.log('   Tabla del:'.green, colors.blue( base ) );
            console.log('===================='.green);

            console.log(consola);
        }
        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );


        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }



}

module.exports = {
    crearArchivo
}
/*Primera forma

const crearArchivo = ( base = 5 ) => {//por defecto 5 si no recibe nada

    return new Promise( ( resolve, reject ) => {
        console.log('*******************************');
        console.log( `            Tabla del:`, base );
        console.log('*******************************');

        let salida = '';

        for (let i = 1; i < 11; i++) {
    
        salida += (`${ base } X ${ i } = ${ base * i }\n`);
        }

        fs.writeFileSync( `tabla-${ base }.txt`,salida );

        resolve.log(`tabla-${ base }.txt creado`);
        
    });
    
}





*/


module.exports = {
    crearArchivo
}