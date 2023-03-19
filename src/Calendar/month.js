import React from 'react';
import styled from 'styled-components';

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 2.25em);
  grid-row-gap: 4px;
  justify-items: center;
  align-items: center;
  align-items: baseline;
  margin: 16px 0 24px 0;
  font-weight: 500;
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

const Today = styled.div`
  border-bottom: 1px solid #437ef7;
  padding-bottom: 4px;
`;

const Month = ({ firstDay, days }) => {
  const arr = () => {
    let month = [];
    for (let i = 2; i <= days + 3; i++) {
      const day = new Date(new Date().setDate(i - firstDay)).getDate();
      month.push(day);
    }
    while (month.length % 7 !== 0) {
      const day = new Date(new Date().setDate(month.length - 1)).getDate();
      month.push(day);
    }
    return month;
  };
  return (
    <MonthContainer>
      <WeekHeader />
      {arr().map((item, i) => {
        if (new Date().getDate() === item) {
          return <Today>{item}</Today>;
        }
        return <div>{item}</div>;
      })}
    </MonthContainer>
  );
};

export default Month;
