const argv = require('./config/yargs').argv;
const porHacer = require('./porhacer/porhacer.js');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('===:tarrea:====');
            console.log('Descripcion: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===:Fin:====');
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        let listado2 = porHacer.getListado();
        for (let tarea2 of listado2) {
            console.log('===:tarrea:====');
            console.log('Descripcion: ', tarea2.descripcion);
            console.log('Estado: ', tarea2.completado);
            console.log('===:Fin:====');
        }
        break;
    default:
        console.log('comando no es reconocido');
        break;
}