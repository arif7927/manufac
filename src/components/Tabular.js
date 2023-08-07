import React, { useEffect, useState } from "react";
import Mean from "./Mean";
import Median from "./Median";
import Mode from "./Mode";

const Tabular = ({ rowData, tableHeader }) => {
  const [data, setData] = useState(rowData);

  const tableHeading = data.map((item) => item.Alcohol);

  const fillterTableHeading = tableHeading.filter(
    (item, index) => tableHeading.indexOf(item) === index
  );

  useEffect(() => {
    if (tableHeader === "Gamma") {
      const gammaData = data.map((item) => {
        let gamma = (item.Ash * item.Hue) / item.Magnesium;
        return {
          ...item,
          Gamma: gamma,
        };
      });
      setData(gammaData);
    }
  }, []);

  return (
    <table
      border="1"
      style={{ borderCollapse: "collapse", textAlign: "left" }}
      width="500px"
    >
      <thead>
        <tr>
          <th>Measure</th>
          {fillterTableHeading.map((item) => {
            return <th>Class {item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{tableHeader} Mean</th>
          <Mean
            data={data}
            dataCount={fillterTableHeading}
            itemKey={tableHeader}
          />
        </tr>
        <tr>
          <th>{tableHeader} Median</th>
          <Median
            data={data}
            dataCount={fillterTableHeading}
            itemKey={tableHeader}
          />
        </tr>
        <tr>
          <th>{tableHeader} Mode</th>
          <Mode
            data={data}
            dataCount={fillterTableHeading}
            itemKey={tableHeader}
          />
        </tr>
      </tbody>
    </table>
  );
};

export default Tabular;
