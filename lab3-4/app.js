const { write } = require('fs');
const http = require ('http');
const port = http.createServer((req, res)=>{
    let myObj =
    [
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"},
        {"name":"shrouk", "age": 23, "intake": 42, "track": "open source", "branch": "Alex"}
    ] ;

    if(req.url == '/login' && req.method == 'GET')
    {
        res.write('login Page') ;
        res.end();
    }
    else if(req.url == '/signup' && req.method == 'GET')
    {
        res.write('<h1>signup page</h1>') ;
        res.end();
    }
    else if(req.url == '/profile' && req.method == 'GET')
    {
        res.write('profile Page') ;
        res.end();
    }
    else if(req.url == '/' && req.method == 'GET')
    {
        res.write(JSON.stringify(myObj)) ;
        res.end();
    }
    else
    {
        res.write('404 no Page') ;
        res.end();
    }

})
port.listen(3000, ()=>{
    console.log('server is running ....');
})
