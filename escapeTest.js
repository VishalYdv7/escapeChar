const http = require('http');
const responseString ='abc\\1\\2\\3\\4\\\\\\d';
const server = http.createServer((req, res) => {
    let ans =escapeFun(responseString);
    res.end(ans);
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
function escapeFun(dummy){
    let output='';
    let i=0;
    while(i<dummy.length){
        if (dummy[i] === '\\' && i + 1 < dummy.length) {
            switch (dummy[i + 1]) {
                case '1':
                    output += ':';
                    break;
                case '2':
                    output += ';';
                    break;
                case '3':
                    output += '[';
                    break;
                case '4':
                    output += ']';
                    break;
                case '\\':
                    output += '\\';
                    break;
                default:
                    output += dummy[i+1];
            }
            i += 2;
        } else {
            output += dummy[i];
            i++;
        }
    }
    return output;
}