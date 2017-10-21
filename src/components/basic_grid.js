import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const getTable = (data,columns,page) => {
    return <ReactTable
        data={data}
        page={page}
        columns={columns}
        defaultPageSize={20}
        className="-striped -highlight"
    />;
};

const  getColumns = () =>{
    return [
        {
            Header: "Name",
            columns: [
                {
                    Header: "First Name",
                    accessor: "firstName"
                },
                {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName
                }
            ]
        },
        {
            Header: "Info",
            columns: [
                {
                    Header: "Age",
                    accessor: "age"
                },
                {
                    Header: "Status",
                    accessor: "status"
                }
            ]
        },
        {
            Header: 'Stats',
            columns: [
                {
                    Header: "Visits",
                    accessor: "visits"
                }
            ]
        }
    ];
};
const FunctionalGrid = ({page}) => {
    const data = makeData();
    const columns = getColumns();
    const table =  getTable(data,columns,page);
    return (
        <div>
            {table}
        </div>
    );
};

export default FunctionalGrid;