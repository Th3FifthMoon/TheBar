import React from "react";
import { Table } from "react-bootstrap";

export default function DrinkItems({menuItems}){
    var items = [];

    menuItems.forEach((data, index) => {
        items.push(<tr><td key={index}>{data}</td></tr>);
    })

    return (
        <Table striped="columns">
            <tbody>
                {items}
            </tbody>
        </Table>
    )
}