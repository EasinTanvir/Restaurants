import Head from 'next/head';
import MyMonth from '../../Components/Calander/Month';
import { GetAllData } from '../../Components/FetchData/Firebase'
import DataList from '../../Components/Restaurant/DataList';

export default function index(props) {

    const {lists} = props;

  
  return (
    <div>
    <Head>
    <title>All Events</title>
    <meta name='description' content='all the userEvents'></meta>
    </Head>
        <MyMonth />
        <DataList items={lists}/>
    </div>
  )
}

export async function getStaticProps(){

    const values = await GetAllData();

    return{
        props:{
            lists : values
        },
        revalidate:10
    }
}
