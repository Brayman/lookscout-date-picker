import React from 'react';
import styled from 'styled-components';
import { Section } from '../common/section';
import { Buttons } from './buttons';
import Header from './header';
import Month from './month';

const CalendarSection = styled(Section)`
  padding: 24px;
  margin: 1em;
`;

const Calendar = () => {
  const dateObj = new Date();
  const date = new Date(dateObj.setDate(1));
  return (
    <CalendarSection>
      <Header>{dateObj.toLocaleDateString('en-EN', { month: 'long' })}</Header>
      <Month
        firstDay={date.getDay()}
        days={new Date(dateObj.setMonth(dateObj.getMonth() + 1, 0)).getDate()}
      />
      <Buttons />
    </CalendarSection>
  );
};

export default Calendar;
