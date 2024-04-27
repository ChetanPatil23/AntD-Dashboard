import { Table } from "antd";
import "./DashboardSearchResultsTable.css";
import React from "react";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
  },
];

const DashboardSearchResultsTable = () => {
  return (
    <Table
      dataSource={data}
      className="centered-table brown-table-header"
      pagination={false}
    >
      <Column title="Client Group" dataIndex="age" key="age" />
      <Column title="Legal Entities" dataIndex="age" key="age" />
      <ColumnGroup title="Contract Period Ends On">
        <Column title="REMO" dataIndex="firstName" key="firstName" />
        <Column title="VENDOR" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <ColumnGroup title="Unit(s)">
        <Column title="Active" dataIndex="firstName" key="firstName" />
        <Column title="Inactive" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <ColumnGroup title="Vendor(s)">
        <Column title="Active" dataIndex="firstName" key="firstName" />
        <Column title="Inactive" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
    </Table>
  );
};

export default DashboardSearchResultsTable;
