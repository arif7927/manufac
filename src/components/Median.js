import React from "react";

const Median = ({ data, dataCount, itemKey }) => {
  const medianValue = (number) => {
    const filterData = data.filter((item) => item.Alcohol === number);
    const flavanoidsData = filterData.map((item) => Number(item[itemKey]));
    const sortedData = flavanoidsData.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    const medianData =
      sortedData.length % 2 === 0
        ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
        : sortedData[middleIndex];
    return medianData.toFixed(3);
  };

  return (
    <>
      {dataCount.map((item) => {
        return <td>{medianValue(item)}</td>;
      })}
    </>
  );
};

export default Median;
