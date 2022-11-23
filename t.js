const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('welcome honored guest');
    }
    else if(req.url === '/about'){
        res.end('go see our honered guest');
    }
    else
    res.end('<h1>Oops!</h1>');
});

server.listen(5000);
