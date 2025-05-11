const http = require("http");
const roundRobin = require("./roundRobin");
const servers = require("./serverConfig.json").servers;



const loadBalancingAlgorithm = "roundRobin";



const server = http.createServer((req,res)=>{

    if(loadBalancingAlgorithm==="roundRobin" && req.url==="/"){
        roundRobin( servers, req, res);
        
    }
    else{
        res.writeHead(500);
        res.end("Load balancing algorithm is not supported. ");
    }
    

});

server.listen(3000 , ( )=>{
    console.log("Load Balancer running on port 3000");
})