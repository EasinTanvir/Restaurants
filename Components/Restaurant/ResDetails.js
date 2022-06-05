import classes from './ResDetails.module.css'
export default function ResDetails(props) {

    const {items} = props;

    const humanData = new Date(items.build).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })

  return (
    <div className={classes.main}>
    <div className={classes.image}>  <img src={'/' + items.image} /> </div>
        <h1>{items.name}</h1>
       <div className={classes.text}> 
       {items.bio}       
        </div>
        <div  className={classes.date}>
        {humanData}
        </div>

      <div  className={classes.address}>{items.location}</div>  
    </div>
  )
}
