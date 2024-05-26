import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askOption() {
    rl.question("Ingrese una opción: ", (select) => {
        if (parseInt(select) > 0) {
            return 1;
        }
        return select;
    });
}

function askTitle() {
    rl.question("Ingrese el titulo: ", (title) => {
        rl.close();
        console.log(`${title}`);
    });
}


askTitle();
askOption();

