import * as React from "react";
import { Table } from "baseui/table-semantic";

import "./example.css";

function Button({ children }) {
  return (
    <button
      onClick={() => {
        alert("click");
      }}
    >
      {children}
    </button>
  );
}

export default () => {
  return (
    <Table
      columns={["Name", "Age", "Bio", "Address", "Markup"]}
      data={[
        [
          "Sarah Brown",
          31,
          "some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text",
          "100 Broadway St., New York City, New York",
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "1rem",
              fontWeight: "bolder"
            }}
          >
            Can pass Markup in date array
          </div>
        ],
        [
          "Jane Smith",
          32,
          "some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text",
          "100 Market St., San Francisco, California",
          <Button>
            <>Click me</>
          </Button>
        ]
      ]}
    />
  );
};
