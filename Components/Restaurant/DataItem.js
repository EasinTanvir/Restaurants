import Button from '../ui/Button';
import classes from './Item.module.css';
import Link from 'next/link';

export default function DataItem(props) {
    const {name,bio,location,year,image,id} = props;

    const humanData = new Date(year).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
  return (
    <div className={classes.main}>
        <div className={classes.image}>
           <img src={'/'+image}/>
        </div>
        <div className={classes.alltext}> 
        <h2>{name}</h2>
            <p>{bio}</p>
            <p>{location}</p>
            <h4>{humanData}</h4>
            <div  className={classes.btn}>
              <Button>
                <Link href={`/restaurant/${id}`}>Go for Details</Link>
              </Button>
            </div>
            </div>
    </div>
  )
}
