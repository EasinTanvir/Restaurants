import axios from 'axios';

export async function GetAllData(){

    const response =await axios.get('https://restaurant-20b30-default-rtdb.firebaseio.com/restaurant.json')

    const allData = Object.values(response.data);

    return allData;

}



export async function MyDetails(id){

    const response = await GetAllData();

    const data = response.find((value)=>value.id===id);

    return data;

}

export async function Features(){

    const response = await GetAllData();

    const data = response.filter((value)=>value.userId);
 
    return data 


}

export async function YearAndMonth(fetchData){

    const {year,month} = fetchData;

    const response = await GetAllData();

    let datas = response.filter((event)=>{
        const myDate = new Date(event.build);
        return myDate.getFullYear()===year && myDate.getMonth()===month-1
    })

    return datas;

}

