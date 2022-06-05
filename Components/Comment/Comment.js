import { useState,useContext } from 'react';
import axios from 'axios';
import classes from './Comment.module.css';
import GetComment from './GetComment';
import MyContext from '../Context/Context';


export default function Comment(props) {

    const mainContext = useContext(MyContext);

    const userId = props.userId;

    const [form,setForm] = useState(false);
    const inputValue = {names:'',email:'',comment:''}
    const [input,setInput] = useState(inputValue);
    
    function onChangeHandler(e){

        const {name,value} = e.target;

        setInput({...input,[name]:value});

    }


    function onSubmitHandler(e){
        e.preventDefault();

        const recData = {
            name : input.names,
            email : input.email,
            comment : input.comment,
        }
        mainContext.showContext({
            title:'please wait..',
            message:'get the list',
            status:'pending'
          })
        axios.post(`/api/restaurant/${userId}`,recData)
        mainContext.showContext({
            title:'success',
            message:'get data successfullyy',
            status:'success'
          })



    }

  return (
      
   <div>
  <div className={classes.btn}>
  <button onClick={()=>setForm(!form)}>Comment Here</button>
  </div>
{form?
       <div>
       <form 
       onSubmit={onSubmitHandler}
       className={classes.form}>
       <div className={classes.main}>
        <div>
            <label>Name</label>
            <input   onChange={onChangeHandler} name='names' type='text' placeholder='type your name'/>
        </div>
        <div>
        <label>Email</label>
        <input onChange={onChangeHandler} name='email' type='email' placeholder='type your email'/> 
        </div>
        </div>   
        <label>Comment</label>
        <textarea   onChange={onChangeHandler} name='comment' placeholder='type your comment' rows='6'></textarea>
        <button>Submit</button>
    </form>   
       </div>
:''}

   </div>
  )
}
