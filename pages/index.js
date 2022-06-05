import Email from "../Components/Email/Email";
import { Features } from "../Components/FetchData/Firebase";
import DataList from "../Components/Restaurant/DataList";


export default function Home(props) {



  const {item} = props;
  
  return (
    <div>
    <Email />
   <DataList items={item}/>
    </div>
  )
}

export async function getStaticProps(){

  const data = await Features();

  if(!data){
    return {
      notFound:true
    }
  }

  return{
      props:{
          item : data
      },
      revalidate:10
  }
}