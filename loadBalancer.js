const http = require("http");
const roundRobin = require("./algorithms/roundRobin");
const leastConnections = require("./algorithms/leastConnections");
const serversConfig = require("./serverConfig.json").servers;



// const loadBalancingAlgorithm = "roundRobin";
const loadBalancingAlgorithm = "leastConnections";

const servers = serversConfig.map((server)=>{
    return { ...server, connection: 0}
});



const server = http.createServer((req,res)=>{

    if(loadBalancingAlgorithm==="roundRobin" && req.url==="/"){
        roundRobin( servers, req, res);
    }
    else if(loadBalancingAlgorithm==="leastConnections" && req.url==="/"){
        leastConnections( servers, req, res);
    }
    else{
        res.writeHead(500);
        res.end("Load balancing algorithm is not supported. ");
    }
    

});

server.listen(3000 , ( )=>{
    console.log("Load Balancer running on port 3000");
})