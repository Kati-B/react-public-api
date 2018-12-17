import React, { Component } from 'react';

class Table extends Component {

  renderHeaders = (header) => {
      return(
          <th key={`header-${header.field}`} className="table__headers--cell">{header.label}</th>
      )
  }

  renderRow = (row, index) => {
      return(
        <tr key={`row-${index}`} className="table__row">
            {row.map(this.renderCell)}
        </tr>
    )
  }

  renderCell = (cell, index) => {
    return(
        <td key={index} className="table__row--cell">{cell || "n/a"}</td>
      )
    }

  render() {
    if(this.props.data && this.props.data.length){
      return (
        <div className="table--responsive-mobile">
        <table className="table">
          <thead className="table__headers">
            <tr>
                {this.props.headers.map(this.renderHeaders)}
            </tr>
          </thead>
          <tbody>
                {this.props.data.map(this.renderRow)}
          </tbody>
        </table>
        </div>
      );
    } else {
      return (
        null
      );
    }
  }
}
export default Table;