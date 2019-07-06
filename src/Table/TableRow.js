import React from 'react';

function TableRow(props) {
    const headers=props.headers;
    const element=props.element;
    return (
        <tr>
            {headers.map((el,index)=>(<td key={index}><p>{element[el]}</p></td>))}

        </tr>
    )
}

export default TableRow;
