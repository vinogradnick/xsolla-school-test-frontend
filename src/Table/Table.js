import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import React from "react";

function Table(props) {
    const data = props.source;
    const headers = props.headers;

    return (
        <div>
        <table >
            <TableHeader headers={headers}/>
            <tbody>
            {data.map((el,index) => <TableRow key={index} headers={headers} element={el}/>)}
            </tbody>
        </table>
        </div>
    )
}

export default Table;
