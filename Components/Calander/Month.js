import { useRef } from 'react';
import { useRouter } from 'next/router';
import classes from './Month.module.css';

export default function MyMonth() {
    const router = useRouter();


    const monthRef= useRef();
    const yearRef= useRef();

    function onSubmitHandler(e){
        e.preventDefault();

       
        const year = yearRef.current.value;
        const month = monthRef.current.value;

   router.push(`/restaurant/${year}/${month}`)

       
    }

  return (
    <form
    onSubmit={onSubmitHandler}
    >        
       <div className={classes.option}>
       <div className={classes.year}>
        <label>Month</label>
            <select ref={yearRef}>               
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
            </select>
        </div>
        <div  className={classes.month}>
        <label>Year</label>
        <select ref={monthRef}>               
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
        </div>
        <div className={classes.btn}> <button >Submit</button></div>
       </div>
     
    </form>
  )
}
