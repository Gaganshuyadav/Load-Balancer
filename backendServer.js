const http = require("http");
const serverList = require("./serverConfig.json").servers;


const createServer = ( host, port, timeout)=>{
    
    http.createServer((req,res)=>{

        if("/"===req.url){
            setTimeout(()=>{            
                res.statusCode = 200
                return res.end(`req is commig on / successfully and running on ${host}:${port}`);
            }, timeout);
            
        }
        else{
            return res.end(`No Path Match`);
        }

       
 
        
        
    }).listen(port, host, ()=>{
        console.log(`Server is running on http://${host}:${port}`);
    });
}

//all running servers
serverList.forEach((server)=>{
    createServer( server.host, server.port, server.timeout);
})



