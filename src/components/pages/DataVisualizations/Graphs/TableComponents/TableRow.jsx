import React from 'react';
import TableInnerSquare from './TableInnerSquare';
import SubTable from './SubTable';

function TableRow(props) {
  const { columns, row, tableWidth, rowHeight } = props;

  return (
    <div
      className="table-row"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: tableWidth,
        overflow: 'hidden',
      }}
    >
      {columns.map((property, idx) => {
        // Fix: Added curly braces
        if (row) {
          if (typeof row[property] === 'object') {
            return (
              <SubTable
                dataObject={row[property]}
                rowHeight={rowHeight}
                key={idx}
              />
            );
          } else {
            return (
              <div style={{ overflow: 'hidden', flex: '1' }} key={idx}>
                <TableInnerSquare
                  innerData={row[property]}
                  rowHeight={rowHeight}
                  key={idx}
                />
              </div>
            );
          }
        }
        return null; // Fix: Added a return statement in case the conditions are not met
      })}
    </div>
  );
}

export default TableRow;
