function READ(x) {
    return x;
}

function EVAL(x) {
    return x;
}

function PRINT(x) {
    return x;
}

function rep(x) {
    return PRINT(EVAL(READ(x)));
}

var readline = require("readline"),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

rl.setPrompt("user> ");
rl.prompt();

rl.on("line", function(line) {
    process.stdout.write(rep(line));
    process.stdout.write("\n");
    rl.prompt();
}).on("exit", function() {
    rl.close();
    process.exit(0);
});
