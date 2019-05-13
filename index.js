const readLine = require('readline-sync');

function statr(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readLine.question('Type a Wikipedia search term:');
    }

    function askAndReturnPrefix(){
        const prefix = ["Who is", "What is", "the history of"];
        const selectedPrefixIndex = readLine.keyInSelect(prefix, "Choose options:");
        return prefix[ selectedPrefixIndex ];
    }

    console.log(content);
}
statr();