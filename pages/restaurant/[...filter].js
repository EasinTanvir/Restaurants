import Error from "../../Components/Error/Error";
import { YearAndMonth } from "../../Components/FetchData/Firebase";
import DataList from "../../Components/Restaurant/DataList";


export default function Filter(props) {
  const {lists} = props;

  if(props.haserror){
    return <Error />
  }
 
  return (
    <div>
   
   <DataList items={lists}/>
    </div>
  )
}

export async function getServerSideProps(context){
  
  const {params} = context;
  const userId = params.filter;

  if(!userId){
    return 'loading'
  }

  const myyear = userId[0];
  const mymonth = userId[1];

  const numYear = +myyear;
  const numMonth = +mymonth;

  if(isNaN(numYear) || isNaN(numMonth) || !numYear || numYear>2025 || numYear<2018 || !numMonth || numMonth>12 || numMonth<1){
    return {
     props:{haserror:true}
    }
  }

  const RecData = await YearAndMonth({year:numYear,month:numMonth});

  if(!RecData || RecData.length===0){
    return {
      props:{haserror:true}
    }
}

  return{
    props:{
      lists:RecData
    }
  }

}
