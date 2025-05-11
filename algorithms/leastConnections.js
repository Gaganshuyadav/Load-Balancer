
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer();




const leastConnections = ( servers, req, res)=>{
    
    //sort on basis of least connections
    const sortServersOnBasisOfConnections = servers.sort((a,b)=> a.connection - b.connection);
    const currTarget = sortServersOnBasisOfConnections[0];
    currTarget.connection++;

    console.log(currTarget);

    proxy.web( req, res, { target: `http://${currTarget.host}:${currTarget.port}` });

    res.on("finish", ()=>{
        currTarget.connection--;
        console.log("end of request: ",currTarget)
    })

};                                                                 


module.exports = leastConnections;