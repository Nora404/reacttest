import React from "react";
import Button from "./Button";

class Table extends React.Component {
  createTable() {
    let table = [];

    for (let i = 0; i < 10; i++) {
      let children = [];
      table.push(
        <tr>
          <td>
            <Button />
          </td>
        </tr>
      );
    }
    return table;
  }

  render() {
    return <table>{this.createTable()}</table>;
  }
}

export default Table;
