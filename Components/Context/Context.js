import { createContext, useEffect, useState } from 'react';

const MyContext = createContext({
    mainContext:null,
    showContext:function(){},
    hideContext:function(){},
});

export function HelperContext(props){

const [input,setInput] = useState();

useEffect(()=>{
    
    const time = setTimeout(()=>{

        setInput(null);
    },3000)

    return ()=>{
        clearTimeout(time)
    }

},[input])


function showMyContext(recData){

    setInput(recData);
    
}

 function hideMyContext(){
    setInput(null)
}

const context = {
    mainContext:input,showContext:showMyContext,hideContext:hideMyContext,
}



   return <MyContext.Provider value={context}>{props.children}</MyContext.Provider>

}



export default MyContext;