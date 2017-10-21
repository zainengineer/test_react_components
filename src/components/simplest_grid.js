import React from 'react';
import { Grid } from 'react-virtualized';

// Grid data as an array of arrays
const list = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ]
    // And so on...
];

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
    return (
        <div
            key={key}
            style={style}
        >
            {list[rowIndex][columnIndex]}
        </div>
    )
}
// Render your grid
const SimplestGrid =   () => {
    return <Grid
        cellRenderer={cellRenderer}
        columnCount={list[0].length}
        columnWidth={100}
        height={300}
        rowCount={list.length}
        rowHeight={50}
        width={600}
    />
};
export default SimplestGrid;