import React from 'react'

function ListItem(props) {
    const item=props.item;

    return(
        <li className="list-item">
            {item}

        </li>
    )
}
export default ListItem;
