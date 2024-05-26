//import { hideBin } from 'yargs/helpers';
//importación de funciones
import { title } from 'process';
import { agregarNotas, eliminarNotas, listarNotas, leerNotas, noteEdite } from './utiles/notas.js';
//import yargs from 'yargs';

//const readline = require('readline'); //Al usar type:module en package.json
//cambiar el require por import
import readline from 'readline';

//Comandos de la app de notas
/* 

const yargsInstance = yargs(hideBin(process.argv))
    //Comando para agregar una nota: agregar --title="titulo" --body="cuerpo"
    .command({
        command: 'agregar',
        describe: 'Agregar nueva nota',
        builder: {
            title: {
                describe: 'Titulo de la nota',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Cuerpo de la nota',
                demandOption: true,
                type: 'string'
            }
        }, handler(argv) {
            agregarNotas(argv.title, argv.body);
        }
    })
    //Comando para eliminar una nota: eliminar --title="titulo"
    .command({
        command: 'eliminar',
        describe: 'Eliminar nueva nota',
        builder: {
            title: {
                describe: 'Titulo de la nota',
                demandOption: true,
                type: 'string'
            }
        }, handler(argv) {
            eliminarNotas(argv.title);
        }
    })
    //Comando para ver lista de notas: ver 
    .command({
        command: 'ver',
        describe: 'Lista de notas',
        handler() {
            listarNotas();
        }
    })
    //Comando para ver una nota: leer
    .command({
        command: 'leer',
        describe: 'Leer una nota',
        builder: {
            title: {
                describe: 'Titulo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            leerNotas(argv.title);
        }
    })
    //comando para editar una nota: editar --title="nuevo" --body="nuevo cuerpo"
    .command({
        command: 'editar',
        describe: 'Edición de nota',
        builder: {
            title: {
                describe: 'Nota a editar',
                demandOption: true, type: 'string',
            }, body: {
                describe: 'Nuevo contenido de la nota',
                demandOption: true, type: 'string',
            },
        },
        handler(argv) {
            noteEdite(argv.title, argv.body);
        },
    })
    .help()
    .parse();
 */

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("App de notas");
    console.log("Las opciones son las siguientes: ");
    console.log(
        "\t1.Ver lista de notas" +
        "\n\t2. Leer una nota" +
        "\n\t3. Nueva nota" +
        "\n\t4. Editar una nota" +
        "\n\t5. Eliminar una nota" +
        "\n\t0. Cerrar app");

    rl.question('Elige una opción: ', (opcion) => {
        switch (opcion) {
            //Lista de notas
            case '1':
                listarNotas();
                volverAlMenu();
                break;
            //Leer una nota
            case '2':
                rl.question('Ingrese el titulo de la nota: ', (title) => {
                    leerNotas(title);
                    volverAlMenu();
                });
                break;
            //Agregar una nueva nota
            case '3':
                rl.question('Ingrese el titulo de la nueva nota: ', (title) => {
                    rl.question('Ingrese el cuerpo: ', (body) => {
                        agregarNotas(title, body);
                        volverAlMenu();
                    });
                });
                break;
            //Editar una nota
            case '4':
                rl.question('Ingrese el titulo de la nota a editar: ', (title) => {
                    rl.question('Ingrese el nuevo cuerpo: ', (body) => {
                        noteEdite(title, body);
                        volverAlMenu();
                    });
                });
                break;
            //Eliminar una nota
            case '5':
                rl.question('Ingrese el titulo de la nota a eliminar: ', (title) => {
                    eliminarNotas(title);
                    volverAlMenu();
                });
                break;
            //Cerrar app de nota
            case '0':
                console.log('Cerrando app');
                rl.close();
                return;
            //mensaje que indica que se ingresó una opción no válida
            default:
                console.log('Opción no válida');
                volverAlMenu();
        }
    });
}

function volverAlMenu() {
    setTimeout(() => {
        console.log("\n");
        menu();
    }, 100);  // Espera un momento antes de mostrar el menú nuevamente
}

menu();




/*
    .command({
        command: 'editar',
        describe: 'Edición de nota',
        builder: {
            title: {
                describe: 'Nota a editar',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Nuevo contenido de la nota',
                demandOption: true,
                type: 'string',
            },
            handler(argv) {
                editarNotas(argv.title, argv.body);
            },
        }
    })
*/