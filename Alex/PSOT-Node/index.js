//First Lets Get The HTTP built in Module
const http = require("http");

//Get a list of names

const names = ["Ada", "Boi Joe", "Reety Uji"]

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        res.write("Hello World")
        return res.end();
    }

    if (req.url == "/names"){
        names.forEach((name) => {
             res.write(name);
        })
       
        return res.end();
    }
    


});

server.listen(8000, () => {
    console.log("Listening on port 8000")
})