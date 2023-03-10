import React from 'react';
import styled from 'styled-components';

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 2.25em);
  grid-row-gap: 4px;
  justify-items: center;
  align-items: center;
  margin: 16px 0 24px 0;
`;

const WeekHeaderTitle = styled.div`
  color: #dae0e6;
  font-weight: 500;
  line-height: 20px;
`;

const WeekHeader = () => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat', 'Su'];
  return days.map((title) => <WeekHeaderTitle>{title}</WeekHeaderTitle>);
};
const Month = () => {
  const arr = () => {
    let month = [];
    for (let i = 31; i > 0; i--) {
      month.push(32 - i);
    }
    return month;
  };
  console.log(arr);
  return (
    <MonthContainer>
      <WeekHeader />
      {arr().map((item, i) => (
        <div>{item}</div>
      ))}
    </MonthContainer>
  );
};

export default Month;
