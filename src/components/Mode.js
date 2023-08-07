import React from "react";

const Mode = ({ data, dataCount, itemKey }) => {
  const modehandler = (number) => {
    const filterData = data.filter((item) => item.Alcohol === number);
    const flavanoidsData = filterData.map((item) => Number(item[itemKey]));

    const repeatDataCount = {};
    flavanoidsData.forEach((value) => {
      repeatDataCount[value] = (repeatDataCount[value] || 0) + 1;
    });

    let itemMode;
    let maxNumber = 0;

    for (let value in repeatDataCount) {
      if (repeatDataCount[value] > maxNumber) {
        itemMode = parseFloat(value);
        maxNumber = repeatDataCount[value];
      }
    }
    return itemMode.toFixed(3);
  };

  return (
    <>
      {dataCount.map((item) => {
        return <td>{modehandler(item)}</td>;
      })}
    </>
  );
};

export default Mode;
