import React from "react";

const Mean = ({ data, dataCount, itemKey }) => {
  const filterMeanData = (number) => {
    const filterData = data.filter((item) => item.Alcohol === number);
    const flavanoidsData = filterData.map((item) => Number(item[itemKey]));
    const totalFlavanoids =
      flavanoidsData.reduce((sum, item) => sum + item) / flavanoidsData.length;
    return totalFlavanoids.toFixed(3);
  };

  return (
    <>
      {dataCount.map((item) => {
        return <td>{filterMeanData(item)}</td>;
      })}
    </>
  );
};

export default Mean;
