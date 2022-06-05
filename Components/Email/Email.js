import axios from 'axios';
import { useState,useContext } from 'react';
import MyContext from '../Context/Context';
import classes from './Email.module.css';

export default function Email() {

  const mainContext = useContext(MyContext)

    const [input,setInput] = useState();

    function onSubmitHandler(e){
        e.preventDefault();

        const allData = {
          email:input,
        }

        mainContext.showContext({
          title:'Sigingup...',
          message:'please wait',
          status:'pending'
        })

       axios.post('/api/restaurant',allData)
       .catch((error)=>{
        mainContext.showContext({
          title:'Error',
          message:'Not signing up',
          status:'error'
        })
       })

       mainContext.showContext({
        title:'success',
        message:'signing complete',
        status:'success'
      })

    }

  return (
    
        <form
        onSubmit={onSubmitHandler} 
        className={classes.email}>
        <label>Email</label>
        <input
        onChange={(e)=>{setInput(e.target.value)}}
         placeholder='type your email' type='email'/>
        <button>Submit</button>
        </form>
 
  )
}
