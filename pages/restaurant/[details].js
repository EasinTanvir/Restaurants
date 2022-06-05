import Comment from '../../Components/Comment/Comment';
import GetComment from '../../Components/Comment/GetComment';
import { MyDetails } from '../../Components/FetchData/Firebase'
import ResDetails from '../../Components/Restaurant/ResDetails'

export default function Details(props) {
  
    const {listss} = props;
  return (
    <div>        
        <ResDetails items={listss}/>
        <Comment userId={listss.id}/>
       <GetComment  userId={listss.id}/>
    </div>
  )
}

export async function getServerSideProps(context){

    const {params} = context;
    const userId = params.details;


    const recData = await MyDetails(userId);

    

    return {
        props:{
            listss :recData
        }
        
    }
}

