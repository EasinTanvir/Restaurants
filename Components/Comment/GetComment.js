import axios from "axios"
import { useState,useContext } from "react";
import MyContext from "../Context/Context";

export default function GetComment(props) {

  const mainContext = useContext(MyContext);


    const { userId} = props

    const [datas,setData] = useState([])


    const  onClickHandler=async()=>{

      mainContext.showContext({
        title:'please wait..',
        message:'get the list',
        status:'pending'
      })

        const response = await axios.get(`/api/restaurant/${userId}`)

        setData(response.data.getcomment);

        mainContext.showContext({
          title:'done',
          message:'get the list successfully',
          status:'success'
        })

    }

   

  
  return (
    <div>
        <button
        onClick={onClickHandler}
        >Get All Comment</button>
        <div>
        {datas && datas.map((value)=>{
    return (
        <ul key={value._id}>
            <li>{value.name}</li>
            <li>{value.email}</li>
            <li>{value.comment}</li>
        </ul>
    )
  })}
  </div>
    </div>
  )
}
