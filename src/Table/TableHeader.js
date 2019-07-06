import React from 'react';

function TableHeader(props) {
    const header = props.headers;
    return (
        <thead>
        <tr>
            {header.map((el,index) => <th key={index}><p>{el}</p></th>)}
        </tr>
        </thead>
    )
}

export default TableHeader;
