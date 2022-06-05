const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports=(phase)=>{
  
    if(phase===PHASE_DEVELOPMENT_SERVER){
        return {
            env:{
                username:'tanvir',
                password:'tanvir',
                cluster:'cluster0',
                database:'azmeriDev'  
              }
        }
    }

return {
    env:{
      username:'tanvir',
      password:'tanvir',
      cluster:'cluster0',
      database:'azmeriPro'  
    }
}
}


