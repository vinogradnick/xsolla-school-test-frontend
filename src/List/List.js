import React from 'react'
import ListItem from "./ListItem";


function List(props) {
    const items=props.items;
    const title=props.title;

    return(
        <div className="list">
            <h3>{title}</h3>
        <ul>
            {items.map((el,index)=><ListItem  key={index} item={el}/>)}
        </ul>
        </div>
    )
}
export default List;
