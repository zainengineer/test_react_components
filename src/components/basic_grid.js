import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class BasicGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    getColumns(){
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
    }
    getTable(){
        const { data } = this.state;
        return <ReactTable
            data={data}
            columns={this.getColumns()}
            defaultPageSize={20}
            className="-striped -highlight"
        />;
    }
    render() {
        return (
            <div>
                {this.getTable()}
            </div>
        );
    }
}

export default BasicGrid;