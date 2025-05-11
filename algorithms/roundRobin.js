
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer();



let i = 0;

const roundRobin = ( servers, req, res)=>{
    

    const currTargetServerIdx = (i++)%servers.length;
    const currTarget = servers[currTargetServerIdx];

    console.log(i, " ", currTarget, "")

    proxy.web( req, res, { target: `http://${currTarget.host}:${currTarget.port}` });

};                                                                 


module.exports = roundRobin;


