import { Fragment,useContext } from 'react';
import Link from 'next/link';
import classes from './Header.module.css'
import Notification from '../Notification/Notification';
import MyContext from '../Context/Context';

export default function Header(props) {

    const parent= useContext(MyContext);
    const main = parent.mainContext;

  return (
   <Fragment>
        <div className={classes.main}>
    <div className={classes.header}>
        <div>
            <Link href='/'>Home</Link>
        </div>
        <div>
        </div>
        <Link href='/restaurant'>All Restaurants</Link>
        </div>
    </div>
    {props.children}
    {main && <Notification title={main.title} message={main.message} status={main.status}/>}
   </Fragment>
   
  )
}
