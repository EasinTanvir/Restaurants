import React from 'react'
import DataItem from './DataItem';
import classes from './List.module.css'

export default function DataList(props) {
    const {items} = props;
  return (
    <div>
        {items.map((data)=>
        { return (
            <DataItem key={data.id} id={data.id} name={data.name} bio={data.bio} image={data.image} location={data.location} year={data.build}/>
            )})}
    </div>
  )
}
